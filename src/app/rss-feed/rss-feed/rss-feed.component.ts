import { Component, OnInit } from '@angular/core';
import { RssFeedService } from '../rss-feed.service';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.scss']
})
export class RssFeedComponent implements OnInit {

  constructor(private rssFeedService: RssFeedService) { }

  ngOnInit() {
    this.rssFeedService.getFeed().subscribe(feed => console.log(feed));
  }

}
