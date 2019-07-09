import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { PostDataService } from './post-data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private static ITEM_NAME: string = 'nblog-token';

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private postDataService: PostDataService) { }

  public getToken(): string {
    return this.storage.getItem(AuthenticationService.ITEM_NAME);
  }

  public saveToken(token: string): void {
    this.storage.setItem(AuthenticationService.ITEM_NAME, token);
  }

  public login(user: User): Promise<any> {
    return this.postDataService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public register(user: User): Promise<any> {
    return this.postDataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem(AuthenticationService.ITEM_NAME);
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
  }
}
