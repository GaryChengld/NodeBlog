import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nBlog';

  constructor() { }

  ngOnInit(): void {
  }

}
