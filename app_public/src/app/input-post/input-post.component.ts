import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PostDataService } from '../post-data.service'
import { AuthenticationService } from '../authentication.service';
import { Post } from '../post.model';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-input-post',
  templateUrl: './input-post.component.html',
  styleUrls: ['./input-post.component.css']
})
export class InputPostComponent implements OnInit {
  @Input() post;
  newPost: boolean;
  public title: string;
  public errorMessage: string;

  constructor(
    private postDataService: PostDataService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private historyService: HistoryService
  ) { }


  ngOnInit() {
    if (this.post._id) {
      this.title = "Modify Post";
      this.newPost = false;
    } else {
      this.title = "New Post";
      this.newPost = true;
    }
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.newPost) {
      this.post.author = this.authenticationService.getCurrentUser().name;
    }
    if (this.formIsValid()) {
      this.savePost(this.post)
        .then((saved: any) => {
          console.log("save post successfully");
          console.log(saved);
          this.router.navigate(['/posts', saved._id]);
        })
        .catch(error => {
          this.errorMessage = error;
        });
    } else {
      this.errorMessage = 'All fields requried, please try again';
    }
  }

  onCancel(): void {
    console.log(this.historyService.getPreviousUrl());
    this.router.navigateByUrl(this.historyService.getPreviousUrl());    
  }

  private savePost(post: Post): Promise<any> {
    if (post._id) {
      return this.postDataService.upodatePost(post);
    } else {
      return this.postDataService.addPost(post);
    }
  }

  private formIsValid(): boolean {
    if (this.post.title && this.post.body) {
      return true;
    } else {
      return false;
    }
  }
}
