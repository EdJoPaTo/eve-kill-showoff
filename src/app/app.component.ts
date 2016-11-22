import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ConfigService } from './config.service';
import { KillmailService, Killmail } from './z-killboard';
import { LoadKillsService } from './load-kills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private logo = '';
  private title = '';
  private subtitle = '';
  private background = '';
  private backgroundIsDark = false;

  private killIds: Observable<number[]>;
  private killmails: Observable<Killmail>;
  private errorMessage: string = '';

  constructor(
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
      .share();

    this.killmails
      .subscribe(kills => { }, error => this.errorMessage = 'There was a problem optaining kill information from zKillboard!');
  }
}
