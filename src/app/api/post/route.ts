import { Post } from "@/types/Post";
import { PostSlug } from "@/types/PostSlug";
import { Client } from "@notionhq/client";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const notionSecret = process.env.NOTION_SECRET;
const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

async function getBlocks(blockId: string) {
    let { results: children } = await notion.blocks.children.list({ block_id: blockId });
    for (const child of children) {
        const grandChidlren = await getBlocks(child.id);
        // @ts-ignore
        child.children = grandChidlren;
    }
    return children;
}

export async function GET(req: Request) {
    if (!notionSecret || !blogDatabaseId) {
        throw Error('Missing notion secret or database id');
    }

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    const { results: pages }  = await notion.databases.query({
        database_id: blogDatabaseId
    });

    const posts: Post[] = pages.map((item) => {
        return {
            // @ts-ignore
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

    const post = posts.find((item) => item.slug === slug);
    if(!post) {
        throw Error('Post not found');
    }
    const blocks = await getBlocks(post.id);
    console.log("Post encontrado", JSON.stringify(blocks));


    // console.log(JSON.stringify(response));
    
    // // @ts-ignore
    // res.status(200).json({ post, blocks });

    return NextResponse.json({ post, blocks });
}