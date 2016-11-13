import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class LoadKillsService {
  private cache: ReplaySubject<number[]>;

  constructor(
    private http: Http
  ) { }

  get(): Observable<number[]> {
    if (!this.cache) {
      this.cache = new ReplaySubject<number[]>(1);
      this.http
        .get(`/assets/kills.json`)
        .map((r: Response) => r.json())
        .subscribe(data => this.cache.next(data),
        err => this.cache.error(err),
        () => this.cache.complete()
        );
    }
    return this.cache;
  }

}
