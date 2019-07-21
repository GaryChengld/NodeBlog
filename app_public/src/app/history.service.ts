import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly excludes: string[] = ['/register', '/login', '/newpost'];
  private urls: string[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(routerEvent => routerEvent instanceof NavigationEnd))
      .subscribe((routerEvent: NavigationEnd) => {
        const url = routerEvent.urlAfterRedirects;
        if (!this.excludes.includes(url)) {
          console.log(url);
          this.urls = [...this.urls, url];
        }
      });
  }

  public getPreviousUrl(): string {
    const length = this.urls.length;
    return length > 0 ? this.urls[length - 1] : '/';
  }
}
