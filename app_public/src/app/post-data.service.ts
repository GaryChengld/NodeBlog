import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getLatestPosts(): Promise<Post[]> {
    console.log('getLatestPosts');
    const url: string = `${this.apiBaseUrl}/posts/latest/5`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Post[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}