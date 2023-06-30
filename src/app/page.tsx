import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/Post";
import { Metadata } from "next";
import { getBaseUrl } from "@/lib/getBaseUrl";

export const metadata: Metadata = {
    title: 'Blog',
}

const fetchFromNotion = async () => {
    const res = await fetch(`${getBaseUrl()}/api/posts`);
    const data = await res.json();
    return data;
}

const ColorText = ({ children, color }: any) => {
    const gradient = color == 'pink' ? 'from-pink-500 to-pink-700' : 'from-blue-500 to-blue-700';	
    return (
        <span className={`text-transparent bg-clip-text bg-gradient-to-t ${gradient} font-bold`}>{children}</span>
    )
}

const Blog = async () => {
    const posts: Post[] = await fetchFromNotion();

    return (
        <>
            <div className="container mx-auto px-4">
                {/* Blog Header */}
                <div className="mt-24 mb-12">
                    {/* <h2 className="font-semibold text-xl">/blog</h2> */}
                    <h3 className="font-medium text-6xl mt-2">Explore nosso <ColorText color={'pink'}>Blog</ColorText>.<br/>Descubra!</h3>
                    <p className="mt-6 max-w-md">Descubra artigos envolventes, dicas úteis e histórias cativantes que vão <ColorText>inspirar</ColorText> você a <ColorText>explorar</ColorText> e <ColorText>aprender</ColorText>.</p>
                </div>
                {/* Blog Content */}
                {/* Featured Post */}
                {/* <Link href={`/blog/${posts[0].slug}`}>
                    <div className="aspect-video w-full relative">
                        <Image priority alt={posts[0].coverImage.alt} fill src={posts[0].coverImage.url}></Image>
                        <div className="flex flex-col space-y-4 justify-end absolute inset-0 p-6 text-white bg-gradient-to-t from-black to-transparent">
                            <span className="text-sm text-light text-zinc-400">{posts[0].author} | {posts[0].publishedAt}</span>
                            <h4 className="font-medium text-4xl">{posts[0].title}</h4>
                            <p className="text-md font-light text-zinc-200">{posts[0].description}</p>
                        </div>
                    </div>
                </Link> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 mt-24 md:mt-20">
                    {
                        posts.map((post: Post, index: number) => (
                            <Link href={`/${post.slug}`} className={`${index == 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                                <div className="flex flex-col">
                                    <div className="aspect-video relative">
                                        <Image alt={post.coverImage.alt} fill src={post.coverImage.url} className="rounded-3xl"></Image>
                                    </div>
                                    <div className="flex flex-col space-y-2 py-5">
                                        <span className="text-xs text-light text-zinc-400">{post.author} | {post.publishedAt}</span>
                                        <h4 className="font-semibold text-2xl">{post.title}</h4>
                                        <p className="text-sm font-light text-zinc-200">{post.description}</p>
                                        {/* <div className="flex space-x-2 items-center">
                                            {
                                                post.categories.map((category: string, index: number) => (
                                                    <span className="text-gray-600 rounded-lg text-xs">{category}</span>
                                                ))
                                            }
                                        </div> */}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Blog;