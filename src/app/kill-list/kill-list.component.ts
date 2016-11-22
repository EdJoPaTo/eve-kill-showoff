import { Component, OnInit, Input } from '@angular/core';

import { Killmail } from '../z-killboard';

@Component({
  selector: 'app-kill-list',
  templateUrl: './kill-list.component.html',
  styleUrls: ['./kill-list.component.scss']
})
export class KillListComponent implements OnInit {
  @Input() killmails: Killmail[];

  constructor(
  ) { }

  ngOnInit() {
  }

}
