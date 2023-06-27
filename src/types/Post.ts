export type Post = {
    id: string;
    title: string;
    slug: string;
    description: string;
    coverImage: {
        url: string;
        alt: string;
    }
    author: string;
    publishedAt: string;
}