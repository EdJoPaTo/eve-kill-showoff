import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { ConfigService } from '../shared';
import { KillmailService, Killmail } from '../z-killboard';
import { LoadKillsService } from './load-kills.service';

@Component({
  selector: 'app-kill-view',
  templateUrl: './kill-view.component.html',
  styleUrls: ['./kill-view.component.scss']
})
export class KillViewComponent implements OnInit, OnDestroy {
  private logo = '';
  private title = '';
  private subtitle = '';
  private background = '';
  private backgroundIsDark = false;

  private sub: Subscription;
  private year: number;
  private month: number;

  private killIds: Observable<number[]>;
  private killmails: Observable<Killmail>;
  private errorMessage: string = '';

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

    this.killmails = this.killIds
      .flatMap(ids => ids)
      .flatMap(id => this.killmailService.get(id))
      .reduce((sum, add) => sum.concat(add), [])
      .map(list => { list.sort((a, b) => new Date(b.killTime) - new Date(a.killTime)); return list; })
      .share();

    this.killmails
      .subscribe(kills => { }, error => this.errorMessage = 'There was a problem optaining kill information from zKillboard!');

    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      if (!params.year && !params.month) {
        let today = new Date();
        this.year = today.getUTCFullYear();
        this.month = today.getUTCMonth() + 1;
      } else {
        this.year = Number(params.year);
        this.month = Number(params.month);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
