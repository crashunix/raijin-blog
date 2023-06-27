import { Config } from "@/types/Config";
import { Post } from "@/types/Post";
import { PostSlug } from "@/types/PostSlug";
import { Client } from "@notionhq/client";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET;
const configDatabaseId = process.env.NOTION_CONFIG_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!notionSecret || !configDatabaseId) {
        throw Error('Missing notion secret or database id');
    }

    const { results: resp }  = await notion.databases.query({
        database_id: configDatabaseId
    });
    
    // @ts-ignore
    const configs: Config[] = resp.map((item) => {
        return {
            // @ts-ignore
            id: item.id,
            // @ts-ignore
            name: item.properties.name.title[0].plain_text,
            // @ts-ignore
            text: item.properties.text.rich_text[0].plain_text,
        }
    })

    // @ts-ignore
    res.status(200).json(configs);
}