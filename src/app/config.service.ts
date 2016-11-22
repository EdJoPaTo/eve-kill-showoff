import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class ConfigService {
  private cache: ReplaySubject<any>;

  constructor(
    private http: Http
  ) { }

  private get(): Observable<any> {
    if (!this.cache) {
      this.cache = new ReplaySubject<any>(1);
      this.http
        .get(`/assets/config.json`)
        .map((r: Response) => r.json())
        .subscribe(data => this.cache.next(data),
        err => this.cache.error(err),
        () => this.cache.complete()
        );
    }
    return this.cache;
  }

  getHeroLogo(): Observable<string> { return this.get().map(o => o.hero.logo); }
  getHeroTitle(): Observable<string> { return this.get().map(o => o.hero.title); }
  getHeroSubtitle(): Observable<string> { return this.get().map(o => o.hero.subtitle); }
  getHeroBackgroundImage(): Observable<string> { return this.get().map(o => o.hero.backgroundImage); }
  getHeroBackgroundIsDark(): Observable<boolean> { return this.get().map(o => o.hero.backgroundIsDark); }
}
