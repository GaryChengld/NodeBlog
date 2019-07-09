import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { environment } from '../environments/environment';
import { User } from './user';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = environment.apiBaseUrl;

  public getLatestPosts(): Promise<Post[]> {
    console.log('getLatestPosts');
    const url: string = `${this.apiBaseUrl}/posts/latest/5`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Post[])
      .catch(this.handleError);
  }

  public getPostById(id: string): Promise<any> {
    console.log(`get post by id, post id:${id}`);
    const url: string = `${this.apiBaseUrl}/posts/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .catch(this.handleError);
  }

  public upodatePost(post: Post) {
    console.log(`update post ${post}`);
    const url: string = `${this.apiBaseUrl}/posts/${post._id}`;
    return this.http
      .put(url, post)
      .toPromise()
      .catch(this.handleError);
  }

  public addPost(post: Post) {
    console.log(`update post ${post}`);
    const url: string = `${this.apiBaseUrl}/posts/`;
    return this.http
      .post(url, post)
      .toPromise()
      .catch(this.handleError);
  }

  public addComment(id: string, formBody) {
    const url: string = `${this.apiBaseUrl}/comments/${id}`;
    return this.http
      .post(url, formBody)
      .toPromise()
      .catch(this.handleError);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('users/login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('users/register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }

  private handleError(errorResponse: any): Promise<any> {
    console.error('Something has gone wrong', errorResponse);
    return Promise.reject(errorResponse.error.message || errorResponse.message || errorResponse);
  }
}
