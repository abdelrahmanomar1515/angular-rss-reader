import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './models/feed-api-response';

@Injectable({
    providedIn: 'root'
})
export class RssFeedService {
    constructor(private http: HttpClient) { }

    getFeed() {
        return this.http.get<ApiResponse>('https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss')
    }
}