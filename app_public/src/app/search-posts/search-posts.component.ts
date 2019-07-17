import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent implements OnInit {
  public title: string = '';
  public posts: any[];

  constructor(
    private postDataService: PostDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(`search text:${params.get('text')}`);
      this.postDataService.searchPosts(params.get('text'))
        .then(posts => {
          this.posts = posts;
          this.title = posts.length > 0 ? "Search results" : "No post found";
        });
    });
  }

}
