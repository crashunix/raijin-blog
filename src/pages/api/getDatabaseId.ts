import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET;
const configDatabaseId = process.env.NOTION_CONFIG_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!notionSecret || !configDatabaseId) {
        throw Error('Missing notion secret or database id');
    }

    const query = req.query;
    const { database } = query;

    const response = await notion.search({
        query: database as string,
        filter: {
            property: 'object',
            value: 'database'
        }
    });

    response.results.map((result) => {
        // @ts-ignore
        console.log(`${result.title[0].plain_text} -> ${result.id}`);
    });
    
    // @ts-ignore
    res.status(200).json({ databaseId: response.results[0].id});
}