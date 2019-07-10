import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-boot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nBlog';

  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
  }

}
