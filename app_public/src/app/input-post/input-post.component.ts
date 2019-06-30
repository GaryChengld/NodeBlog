import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-post',
  templateUrl: './input-post.component.html',
  styleUrls: ['./input-post.component.css']
})
export class InputPostComponent implements OnInit {
  @Input() post;
  
  constructor() { }

  ngOnInit() {
  }

}
