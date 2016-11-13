import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs/Rx';

import { Killmail } from './killmail';

@Injectable()
export class KillmailService {
  private cache = {};

  constructor(
    private http: Http
  ) { }

  get(id: number): Observable<Killmail> {
    // https://zkillboard.com/api/killID/<id>/
    if (!this.cache[id]) {
      this.cache[id] = new ReplaySubject(1);
      this.http
        .get(`https://zkillboard.com/api/killID/${id}/`)
        .map((r: Response) => r.json())
        .map(arr => arr[0])
        .subscribe(data => this.cache[id].next(data),
        err => this.cache[id].error(err),
        () => this.cache[id].complete()
        );
    }
    return this.cache[id];
  }
}
