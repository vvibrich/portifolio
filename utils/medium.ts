export interface MediumPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    categories: string[];
}

export interface MediumFeedResponse {
    status: string;
    feed: {
        url: string;
        title: string;
        link: string;
        author: string;
        description: string;
        image: string;
    };
    items: MediumPost[];
}

export const getMediumPosts = async (): Promise<MediumPost[]> => {
    try {
        const response = await fetch(
            'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@viniciusvibrich'
        );
        const data: MediumFeedResponse = await response.json();

        if (data.status === 'ok') {
            return data.items;
        }

        return [];
    } catch (error) {
        console.error('Error fetching Medium posts:', error);
        return [];
    }
};
