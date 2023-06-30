import { getBaseUrl } from "@/lib/getBaseUrl";
import { Post } from "@/types/Post";
import { Render, withContentValidation } from "@9gustin/react-notion-render";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const data: { post: Post, blocks: any[] } = await fetchFromNotion(params.slug);
    return { 
        title: data.post.title,
        description: data.post.description,
        authors: {
            name: 'Juan Macário',
            url: 'https://juanmacario.dev',
        }
    };
  }

const fetchFromNotion = async (slug: string) => {
    const res = await fetch(`${getBaseUrl()}/api/post?slug=${slug}`);
    const data = await res.json();
    return data;
}
const PostPage = async ({ params }: { params: { slug: string } }) => {
    const data: { post: Post, blocks: any[] } = await fetchFromNotion(params.slug);

    console.log(data);

    const Heading1 = ({ plainText }: { plainText: string }) => {
        return <h1 className="text-2xl my-3 font-medium">{plainText}</h1>
    }
    const Heading2 = ({ plainText }: { plainText: string }) => {
        return <h2 className="text-xl my-3 font-medium">{plainText}</h2>
    }
    const Heading3 = ({ plainText }: { plainText: string }) => {
        return <h3 className="text-lg my-3 font-medium">{plainText}</h3>
    }

    const Paragraph = ({ plainText }: { plainText: string }) => {
        return <p className="my-2">{plainText}</p>
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl mt-24 font-semibold">{data.post.title}</h2>
                <p className="text-zinc-200">{data.post.description}</p>
                <div className="aspect-video w-full relative mt-4">
                    <Image priority alt={data.post.coverImage.alt} fill src={data.post.coverImage.url} className="rounded-3xl"></Image>
                </div>
                <div className="mt-24">
                    <Render blocks={data.blocks} blockComponentsMapper={{
                        heading_1: withContentValidation(Heading1),
                        heading_2: withContentValidation(Heading2),
                        heading_3: withContentValidation(Heading3),
                        paragraph: withContentValidation(Paragraph)
                    }}></Render>
                </div>
            </div>
        </>
    );
}

export default PostPage;