import { StrapiMedia } from "./StrapiMedia"
import { StrapiMenuItem } from "./StrapiMenuItem"

export type SiteConfig = {
    data: {
        id: number,
        attributes: {
            title: string,
            createdAt: Date,
            updateAt: Date,
            logo: {
                data: StrapiMedia[]
            }
            mainMenu: StrapiMenuItem[];
        }
    }
}