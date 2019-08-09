import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse, Item } from './models/feed-api-response';

export interface ItemState {
    items: Item[];
    loading: boolean;
    itemCount: number;
}
let _state: ItemState = {
    items: [],
    loading: false,
    itemCount: 7
};
@Injectable({
    providedIn: 'root'
})
export class RssFeedService {
    private store = new BehaviorSubject<ItemState>(_state);
    private state$ = this.store.asObservable();

    items$ = this.state$.pipe(map(state => state.items), distinctUntilChanged());
    loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
    itemCount$ = this.state$.pipe(map(state => state.itemCount), distinctUntilChanged());

    /**
    * Viewmodel that resolves once data is ready (or updated)...
    */
    vm$: Observable<ItemState> = combineLatest(this.items$, this.itemCount$, this.loading$).pipe(
        map(([items, itemCount, loading]) => {
            return { items, itemCount, loading };
        })
    );

    /**
     * Watch itemCount$ stream to load items and update state
    */
    constructor(private http: HttpClient) {
        this.itemCount$.pipe(
            switchMap((count: number) => {
                return this.getFeed(count);
            })
        ).subscribe(items => {
            this.updateState({ ..._state, items, loading: false })
        })
    }


    // ------- Public Methods ------------------------

    showSevenMoreItems() {
        let { itemCount } = _state;
        itemCount += 7;
        this.updateState({ ..._state, itemCount, loading: true });
    }


    // ------- Private Methods ------------------------

    /** Update internal state cache and emit from store... */
    private updateState(state: ItemState) {
        this.store.next(_state = state);
    }

    private getFeed(numberOfItems: number): Observable<Item[]> {
        const url = createApiUrl(numberOfItems);
        return this.http.get<ApiResponse>(url).pipe(map(res => res.items));
    }
}

function createApiUrl(numberOfItems: number) {
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss';
    const apiKey = `&api_key=${environment.apiKey}`;
    const count = `count=${numberOfItems}`;
    return `${baseUrl}&${apiKey}&${count}`;
}