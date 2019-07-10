import { Injectable } from '@angular/core';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { PostDataService } from './post-data.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    private postDataService: PostDataService,
    private storageService: StorageService) { }

  public login(user: User): Promise<any> {
    return this.postDataService.login(user)
      .then((authResp: AuthResponse) => this.storageService.saveToken(authResp.token));
  }

  public register(user: User): Promise<any> {
    return this.postDataService.register(user)
      .then((authResp: AuthResponse) => this.storageService.saveToken(authResp.token));
  }

  public logout(): void {
    this.storageService.removeToken();
  }

  public isLoggedIn(): boolean {
    const token: string = this.storageService.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.storageService.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
  }
}