type StrapiMediaFormat = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
}

type StrapiMediaAttributes = {
    name: string;
    alternativeText: string;
    caption: null;
    width: number;
    height: number;
    formats: {
        thumbnail: StrapiMediaFormat;
        small: StrapiMediaFormat;
        medium: StrapiMediaFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
}

export type StrapiMedia = {
    id: number;
    attributes: StrapiMediaAttributes;
}