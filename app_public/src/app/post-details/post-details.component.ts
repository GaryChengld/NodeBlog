import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostDataService } from '../post-data.service'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post;
  public newComment = {
    author: '',
    createdOn: Date.now(),
    comment: ''
  };

  public formVisible: boolean = false;
  public errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private postDataService: PostDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(`post id:${params.get('id')}`);
      this.postDataService.getPostById(params.get('id'))
        .then(post => {
          console.log(post);
          this.post = post;
          this.post.comments.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0);
        })
        .catch(error => {
          this.errorMessage = error;
        });
    });
  }

  onCommentSubmit(): void {
    this.errorMessage = '';
    this.newComment.author = this.authenticationService.getCurrentUser().name;
    if (this.formIsValid()) {
      this.newComment.createdOn = Date.now();
      this.postDataService.addComment(this.post._id, this.newComment)
        .then((comment: any) => {
          console.log(comment);
          let comments = this.post.comments.slice(0);
          comments.unshift(comment);
          this.post.comments = comments;
          this.resetAndHideReviewForm();
        });
    } else {
      this.errorMessage = 'All fields requried, please try again';
    }
  }

  showForm(): void {
    this.formVisible = true;
  }


  private formIsValid(): boolean {
    if (this.newComment.author && this.newComment.comment) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideReviewForm(): void {
    this.errorMessage = '';
    this.formVisible = false;
    this.newComment.author = '';
    this.newComment.createdOn = Date.now();
    this.newComment.comment = '';
  }
}
