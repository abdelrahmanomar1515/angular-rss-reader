import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { RssFeedItemComponent } from './rss-feed-item/rss-feed-item.component';

@NgModule({
  declarations: [RssFeedComponent, RssFeedItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [RssFeedComponent]
})
export class RssFeedModule { }
