import { Bars2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type MenuItem = {
    name: string,
    url: string
}

type NavbarProps = {
    hasLogo: boolean,
    title: string,
    menuItems: MenuItem[],
}

const Navbar: React.FC<NavbarProps> = ({ hasLogo, title, menuItems }) => {

    return (
        <div className="container mx-auto px-4 py-4 sticky top-0 z-30">
            <header className="border border-zinc-900 bg-black bg-opacity-40 backdrop-blur-md rounded-xl shadow-lg text-white">
                <div className="flex justify-between items-center p-6">
                    <div className="flex items-center space-x-2">
                        { hasLogo &&
                            <Image src={"/img/abstergo.webp"} width={26} height={26} alt="Abstergo" />
                        }
                        <Link href="/">
                            <span className="text-xl uppercase font-bold">{title}</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6 font-medium">
                        {
                            menuItems.map((item: MenuItem, index: number) => (
                                <Link href={item.url} key={index}>{item.name}</Link>
                            ))
                        }
                    </nav>
                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        <Link href={'/'} className="hidden md:block">
                            <span className="py-2 px-4 rounded-md font-light">Log in</span>
                        </Link>
                        <Link href={'/'} className="hidden md:block">
                            <span className="py-2 px-4 rounded-md font-light bg-gray-800 text-white">Sign up</span>
                        </Link>
                        <button className="md:hidden">
                            <Bars2Icon className="w-8"></Bars2Icon>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;