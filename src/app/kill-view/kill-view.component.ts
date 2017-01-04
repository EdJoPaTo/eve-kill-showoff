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

  private routeParamSub: Subscription;
  private routeDataSub: Subscription;
  year: number;
  month: number;

  filterSubject = new Subject<string>();
  filterLoading: boolean = false;
  filter: any;
  view: string = 'tiles';
  private killIds: Observable<number[]>;
  totalIds: number = 0;
  killmails: Killmail[] = [];
  newestKillYear: number;
  newestKillMonth: number;
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
        if (!this.newestKillYear && !this.newestKillMonth) {
          // the first loaded kill is the newest one (ids are sorted)
          let killDate = KillTimeToDatePipe.toDate(kill.killTime);
          this.newestKillYear = killDate.getUTCFullYear();
          this.newestKillMonth = killDate.getUTCMonth() + 1;
        }

        if (!this.year && !this.month) {
          // If year and month are not set by current route -> use newest one
          this.year = this.newestKillYear;
          this.month = this.newestKillMonth;
        }

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

    this.routeParamSub = this.route.params.subscribe(params => {
      if (params['year'] && params['month']) {
        this.year = Number(params['year']);
        this.month = Number(params['month']);
      }
    });

    this.routeDataSub = this.route.data.subscribe(data => {
      this.view = data['view'];
    });
  }

  ngOnDestroy() {
    this.routeParamSub.unsubscribe();
    this.routeDataSub.unsubscribe();
  }

  updateUrl() {
    let params: any = {};
    let monthSelectorPart = '';

    if (this.year !== this.newestKillYear || this.month !== this.newestKillMonth) {
      monthSelectorPart = '/' + this.year + '/' + this.month;
    }

    this.router.navigate(['/' + this.view + monthSelectorPart, params]);
  }
}
