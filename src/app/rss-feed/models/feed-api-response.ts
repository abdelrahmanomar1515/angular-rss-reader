export interface ApiResponse {
    status: string;
    feed: Feed;
    items: Item[];
}

export interface Item {
    title: string;
    pubDate?: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: Enclosure;
    categories: any[];
}

interface Enclosure {
    link?: string;
}

interface Feed {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}