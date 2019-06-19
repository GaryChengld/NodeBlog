import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostDataService } from '../post-data.service'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post;

  constructor(private route: ActivatedRoute, private postDataService: PostDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(`post id:${params.get('id')}`);
      this.postDataService.getPostById(params.get('id'))
        .then(post => {
          console.log(post);
          this.post = post;
        });
    });
  }

}
