import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RssFeedModule } from './rss-feed/rss-feed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RssFeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
