import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/feed-api-response';
import { ItemState, RssFeedService } from '../rss-feed.service';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('showItem', [
      state('in', style({
        'opacity': 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(80px)'
        })
        , animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class RssFeedComponent {
  vm$: Observable<ItemState> = this.rssFeedService.vm$;
  fallbackImageSource = "https://via.placeholder.com/300?text=placeholder+image";

  constructor(private rssFeedService: RssFeedService) { }

  showMore() {
    this.rssFeedService.showSevenMoreItems();
  }

  // Method used to prevent the ngFor from rerendering items already existing in the list
  trackByItemTitle(index: number, item: Item) {
    return item.title;
  }
}
