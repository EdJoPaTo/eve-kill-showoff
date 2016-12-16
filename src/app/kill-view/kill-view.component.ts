import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { ConfigService, KillTimeToDatePipe } from '../shared';
import { KillmailService, Killmail } from '../z-killboard';
import { LoadKillsService } from './load-kills.service';

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

  private killIds: Observable<number[]>;
  killmails: Killmail[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private killmailService: KillmailService,
    private loadKillsService: LoadKillsService
  ) { }

  ngOnInit() {
    this.configService.getHeroLogo().subscribe(logo => this.logo = logo);
    this.configService.getHeroTitle().subscribe(title => this.title = title);
    this.configService.getHeroSubtitle().subscribe(subtitle => this.subtitle = subtitle);
    this.configService.getHeroBackgroundImage().subscribe(image => this.background = image);
    this.configService.getHeroBackgroundIsDark().subscribe(bool => this.backgroundIsDark = bool);

    this.killIds = this.configService.getKillsUrl()
      .flatMap(url => this.loadKillsService.get(url));

    this.killIds
      .flatMap(ids => ids.reverse())
      .concatMap(id => this.killmailService.get(id))
      .subscribe(
      kill => {
        let list = this.killmails.concat(kill);
        list.sort((a, b) => Number(KillTimeToDatePipe.toDate(b.killTime)) - Number(KillTimeToDatePipe.toDate(a.killTime)));
        this.killmails = list;
      },
      error => this.errorMessage = 'Could not load all kills. There was a problem obtaining kill information from zKillboard!'
      );

    this.sub = this.route.params.subscribe(params => {
      if (!params['year'] && !params['month']) {
        let today = new Date();
        this.year = today.getUTCFullYear();
        this.month = today.getUTCMonth() + 1;
      } else {
        this.year = Number(params['year']);
        this.month = Number(params['month']);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
