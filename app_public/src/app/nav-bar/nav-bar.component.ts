import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public searchText: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public doLogout(): void {
    this.authenticationService.logout();
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public doSearch(): void {
    if (this.searchText) {
      this.router.navigateByUrl(`/search/${this.searchText}`);
    }
  }

  public getUsername(): string {
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.name : 'Guest';
  }
}
