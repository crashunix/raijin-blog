import Link from "next/link";

const fetchFromNotion = async () => {
    const res = await fetch(`http://localhost:3000/api/getConfig`);
    const data = await res.json();
    return data;
}
const Header = async () => {
    const config = await fetchFromNotion();
    console.log(config);
    
    return <>
        <header className="text-gray-800 py-4">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-center">
                    {/* Left Side */}
                    <div className="flex items-center space-x-12">
                        <Link href="/">
                            <span className="text-2xl">{config.find((x: any) => x.name == 'app-name').text}</span>
                        </Link>
                        <nav className="flex items-center space-x-12 font-semibold text-lg">
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/">Projects</Link>
                        </nav>
                    </div>
                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        <Link href={'/'}>
                            <span className="py-2 px-3 rounded-md font-semibold">Log in</span>
                        </Link>
                        <Link href={'/'}>
                            <span className="py-2 px-3 rounded-md font-semibold bg-gray-800 text-white">Sign up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;