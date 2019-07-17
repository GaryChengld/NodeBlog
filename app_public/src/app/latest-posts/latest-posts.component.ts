import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  public posts: any[];
  constructor(private postDataService: PostDataService) { }

  ngOnInit() {
    this.getLatestPosts()
  }

  private getLatestPosts(): void {
    this.postDataService
      .getLatestPosts()
      .then(posts => this.posts = posts);
  }

}
