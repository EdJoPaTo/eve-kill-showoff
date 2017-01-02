import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs/Rx';

import { ConfigService, KillTimeToDatePipe } from '../shared';
import { KillmailService, Killmail } from '../z-killboard';
import { LoadKillsService } from './load-kills.service';
import { SearchService } from '../esi';

@Component({
  selector: 'app-kill-view',
  templateUrl: './kill-view.component.html',
  styleUrls: ['./kill-view.component.scss']
})
export class KillViewComponent implements OnInit, OnDestroy {
  logo = '';
  title = '';
  subtitle = '';
  background = '';
  backgroundIsDark = false;

  private sub: Subscription;
  year: number;
  month: number;

  filterSubject = new Subject<string>();
  filterLoading: boolean = false;
  filter: any;
  view: string = 'tiles';
  private killIds: Observable<number[]>;
  totalIds: number = 0;
  killmails: Killmail[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private configService: ConfigService,
    private killmailService: KillmailService,
    private loadKillsService: LoadKillsService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.configService.getHeroLogo().subscribe(logo => this.logo = logo);
    this.configService.getHeroTitle().subscribe(title => this.title = title);
    this.configService.getHeroSubtitle().subscribe(subtitle => this.subtitle = subtitle);
    this.configService.getHeroBackgroundImage().subscribe(image => this.background = image);
    this.configService.getHeroBackgroundIsDark().subscribe(bool => this.backgroundIsDark = bool);

    this.killIds = this.configService.getKillsUrl()
      .flatMap(url => this.loadKillsService.get(url));

    this.killIds.subscribe(ids => this.totalIds = ids.length);

    this.killIds
      .flatMap(ids => { ids.sort(); return ids.reverse(); })
      .concatMap(id => this.killmailService.get(id))
      .subscribe(
      kill => {
        let list = this.killmails.concat(kill);
        list.sort((a, b) => Number(KillTimeToDatePipe.toDate(b.killTime)) - Number(KillTimeToDatePipe.toDate(a.killTime)));
        this.killmails = list;
      },
      error => this.errorMessage = 'Could not load all kills. There was a problem obtaining kill information from zKillboard!'
      );

    this.filterSubject
      .map(i => { this.filterLoading = true; return i; })
      .debounceTime(300) // wait for 300ms pause in events
      .map(content => content.toLowerCase().trim())
      .map(i => { this.filterLoading = false; return i; })
      .distinctUntilChanged() // ignore if next search term is same as previous
      .map(i => { this.filterLoading = true; return i; })
      .flatMap(term => this.searchService.search(term, ['alliance', 'character', 'corporation', 'inventorytype', 'solarsystem'])
        .map(result => { console.log('filter', term, result); return result; }))
      .map(i => { this.filterLoading = false; return i; })
      .subscribe(filter => this.filter = filter, error => {
        this.errorMessage = 'Could not filter kills. There was a problem loading the needed information from ESI (EVE Swagger Interface).';
        this.filterLoading = false;
      });

    this.sub = this.route.params.subscribe(params => {
      if (!params['year'] && !params['month']) {
        let today = new Date();
        this.year = today.getUTCFullYear();
        this.month = today.getUTCMonth() + 1;
      } else {
        this.year = Number(params['year']);
        this.month = Number(params['month']);
      }

      this.view = params['view'] === 'list' ? 'list' : 'tiles';
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isCurrentMonth(): boolean {
    let today = new Date();
    return this.year === today.getUTCFullYear() && this.month === today.getUTCMonth() + 1;
  }

  goToCurrentMonth(): void {
    let today = new Date();
    this.year = today.getUTCFullYear();
    this.month = today.getUTCMonth() + 1;
    this.updateUrl();
  }

  updateUrl() {
    let params: any = {};
    let monthSelectorPart = '';

    if (!this.isCurrentMonth()) {
      monthSelectorPart = '/' + this.year + '/' + this.month;
    }

    this.router.navigate(['/' + this.view + monthSelectorPart, params]);
  }
}
