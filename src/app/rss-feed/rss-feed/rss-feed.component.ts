import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../models/feed-api-response';
import { RssFeedService } from '../rss-feed.service';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.scss']
})
export class RssFeedComponent {
  feedItems$: Observable<Item[]> = this.rssFeedService.getFeed().pipe(map(res => res.items));
  fallbackImageSource = "https://via.placeholder.com/300?text=placeholder+image";

  constructor(private rssFeedService: RssFeedService) { }

}
