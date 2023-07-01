import { StrapiMedia } from "./StrapiMedia"

export enum StrapiBlockType {
    RichText = 'content.rich-text',
    Slider = 'content.slider'
}

export type StrapiBlock = {
    id: number,
    __component: StrapiBlockType,
    content?: string,
    images?: {
        data: StrapiMedia[]
    },
}

export type StrapiPage = {
    id: number,
    attributes: {
        title: string,
        subtitle: string,
        description: string,
        content: string,
        slug: string,
        createdAt: Date,
        updatedAt: Date,
        publishedAt: Date,
        blocks: StrapiBlock[]
    }
}