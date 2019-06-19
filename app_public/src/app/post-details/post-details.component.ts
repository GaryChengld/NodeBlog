import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service'
import { Post } from '../post.model'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
