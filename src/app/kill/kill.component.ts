import { Component, OnInit, Input } from '@angular/core';

import { Killmail } from '../z-killboard';

@Component({
  selector: 'app-kill',
  templateUrl: './kill.component.html',
  styleUrls: ['./kill.component.scss']
})
export class KillComponent implements OnInit {
  @Input() killmail: Killmail;

  constructor() { }

  ngOnInit() {
    console.log('killmail', this.killmail);
  }

}
