import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  async ngOnInit() {
    this.loading = true;
    this.appService.getNewsList().subscribe((value: any) => {
      this.news = value.articles;
      this.loading = false;
    });
  }

  news: any[] = [];
  loading = false;
}
