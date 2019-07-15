import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service'
import { Post } from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  public posts: Post[];

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
