import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rss-feed-item',
  templateUrl: './rss-feed-item.component.html',
  styleUrls: ['./rss-feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RssFeedItemComponent {
  @Input('itemImageSource') imageSource: string;
  @Input('itemTitle') title: string;
  @Input('itemDate') date: string;
}
