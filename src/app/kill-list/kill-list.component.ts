import { Component, OnInit } from '@angular/core';

import { KillmailService, Killmail } from '../z-killboard';
import { LoadKillsService } from '../load-kills.service';

@Component({
  selector: 'app-kill-list',
  templateUrl: './kill-list.component.html',
  styleUrls: ['./kill-list.component.scss']
})
export class KillListComponent implements OnInit {
  private killmails: Killmail[] = [];

  constructor(
    private killmailService: KillmailService,
    private loadKillsService: LoadKillsService
  ) { }

  ngOnInit() {
    this.loadKillsService.get()
      .flatMap(ids => ids)
      .flatMap(id => this.killmailService.get(id))
      .reduce((sum, add) => sum.concat(add), [])
      .subscribe(killmails => this.killmails = killmails);
  }

}
