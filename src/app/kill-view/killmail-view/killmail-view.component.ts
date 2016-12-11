import { Component, OnInit, Input } from '@angular/core';

import { Killmail } from '../../z-killboard';

@Component({
  selector: 'app-killmail-view',
  templateUrl: './killmail-view.component.html',
  styleUrls: ['./killmail-view.component.scss']
})
export class KillmailViewComponent implements OnInit {
  @Input() killmails: Killmail[];

  constructor() { }

  ngOnInit() {
  }

}
