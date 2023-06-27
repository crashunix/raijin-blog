import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/Post";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog',
}

const fetchFromNotion = async () => {
    const res = await fetch(`${process.env.FRONTEND_URL}/api/posts`);
    const data = await res.json();
    return data;
}

const Blog = async () => {
    // const posts: Post[] = await fetchFromNotion();

    return (
        <>
            <div className="container mx-auto px-4">
                {/* Blog Header */}
                <div className="text-center mt-24 mb-12">
                    <h2 className="font-semibold">Blog</h2>
                    <h3 className="font-medium text-6xl mt-2">Notion blog</h3>
                    <p className="text-gray-600 mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                {/* Blog Content */}
                {/* Featured Post */}
                {/* <Link href={`/blog/${posts[0].slug}`}>
                    <div className="aspect-video w-full relative">
                        <Image priority alt={posts[0].coverImage.alt} fill src={posts[0].coverImage.url}></Image>
                        <div className="flex flex-col space-y-4 justify-end absolute inset-0 p-6 text-white bg-gradient-to-t from-black to-transparent">
                            <span className="text-sm text-light">{posts[0].author} | {posts[0].publishedAt}</span>
                            <h4 className="font-medium text-4xl">{posts[0].title}</h4>
                            <p className="text-md font-light">{posts[0].description}</p>
                        </div>
                    </div>
                </Link> */}

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 text-gray-800">
                    {
                        posts.slice(1).map((post: Post, index: number) => (
                            <Link href={`/blog/${post.slug}`}>
                                <div className="flex flex-col">
                                    <div className="aspect-video relative">
                                        <Image alt={post.coverImage.alt} fill src={post.coverImage.url}></Image>
                                    </div>
                                    <div className="flex flex-col space-y-2 py-5">
                                        <span className="text-xs text-light">{post.author} | {post.publishedAt}</span>
                                        <h4 className="font-semibold text-2xl">{post.title}</h4>
                                        <p className="text-sm font-light">{post.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div> */}
            </div>
        </>
    );
}

export default Blog;