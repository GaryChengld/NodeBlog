import { Injectable, Inject } from '@angular/core';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private static readonly ITEM_NAME: string = 'nblog-token';

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) { }

  public getToken(): string {
    return this.storage.getItem(StorageService.ITEM_NAME);
  }

  public saveToken(token: string): void {
    this.storage.setItem(StorageService.ITEM_NAME, token);
  }

  public removeToken(): void {
    this.storage.removeItem(StorageService.ITEM_NAME);
  }
}
