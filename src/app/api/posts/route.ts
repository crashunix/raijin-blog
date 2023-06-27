import { Post } from "@/types/Post";
import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NextResponse } from "next/server";

const notionSecret = process.env.NOTION_SECRET;
const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export async function GET() {
    if (!notionSecret || !blogDatabaseId) {
        throw Error('Missing notion secret or database id');
    }

    const { results: pages }  = await notion.databases.query({
        database_id: blogDatabaseId
    });

    const posts: Post[] = pages.map((item) => {
        return {
            id: item.id,
            // @ts-ignore
            title: item.properties.title.title[0].plain_text,
            // @ts-ignore
            description: item.properties.description.rich_text[0].plain_text,
            author: 'Juan',
            coverImage: {
                // @ts-ignore
                url: item.properties.cover_image.files[0].external.url,
                // @ts-ignore
                alt: item.properties.title.title[0].plain_text
            },
            // @ts-ignore
            publishedAt: format(parseISO(item.properties.published_time.date.start), 'dd MMM yyyy', { locale: ptBR }),
            // @ts-ignore
            slug: item.properties.slug.rich_text[0].plain_text
        }
    })

    // @ts-ignore
    console.log(posts);

    // res.status(200).json(posts);
    return NextResponse.json(posts);
}