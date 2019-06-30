import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostDataService } from '../post-data.service'

@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html',
  styleUrls: ['./modify-post.component.css']
})
export class ModifyPostComponent implements OnInit {
  post;
  public errorMessage: string;

  constructor(private route: ActivatedRoute, private postDataService: PostDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(`post id:${params.get('id')}`);
      this.postDataService.getPostById(params.get('id'))
        .then(post => this.post = post)
        .catch(error => {
          this.errorMessage = error;
        });
    });
  }

}
