import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { KillmailService, Killmail } from './z-killboard';
import { LoadKillsService } from './load-kills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private killIds: Observable<number[]>;
  private killmails: Observable<Killmail>;

  constructor(
    private killmailService: KillmailService,
    private loadKillsService: LoadKillsService
  ) { }

  ngOnInit() {
    this.killIds = this.loadKillsService.get();

    this.killmails = this.killIds
      .flatMap(ids => ids)
      .flatMap(id => this.killmailService.get(id))
      .reduce((sum, add) => sum.concat(add), [])
      .share();
  }
}
