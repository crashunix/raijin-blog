import { getBaseUrl } from "@/lib/getBaseUrl";
import Link from "next/link";
import next from "next/types";
import { Bars2Icon } from '@heroicons/react/24/outline'

const fetchFromNotion = async () => {
    const res = await fetch(`${getBaseUrl()}/api/config`);
    const data = await res.json();
    return data;
}
const Header = async () => {
    const config = await fetchFromNotion();

    return <>
        <header className="text-gray-800 py-4">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-center">
                    {/* Left Side */}
                    <div className="flex items-center space-x-12">
                        <Link href="/">
                            <span className="text-2xl">{config.find((x: any) => x.name == 'app-name').text}</span>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-12 font-semibold text-lg">
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/">Projects</Link>
                        </nav>
                    </div>
                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        <Link href={'/'} className="hidden md:block">
                            <span className="py-2 px-3 rounded-md font-semibold">Log in</span>
                        </Link>
                        <Link href={'/'} className="hidden md:block">
                            <span className="py-2 px-3 rounded-md font-semibold bg-gray-800 text-white">Sign up</span>
                        </Link>
                        <button className="md:hidden">
                            <Bars2Icon className="w-8"></Bars2Icon>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;