import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemState, RssFeedService } from '../rss-feed.service';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RssFeedComponent {
  vm$: Observable<ItemState> = this.rssFeedService.vm$;
  fallbackImageSource = "https://via.placeholder.com/300?text=placeholder+image";

  constructor(private rssFeedService: RssFeedService) { }

  showMore() {
    this.rssFeedService.showSevenMoreItems();
  }
}
