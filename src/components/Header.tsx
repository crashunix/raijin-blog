import { getBaseUrl } from "@/lib/getBaseUrl";
import Link from "next/link";
import next from "next/types";
import { Bars2Icon } from '@heroicons/react/24/outline'
import Navbar from "./ui/Navbar";
import { SiteConfig } from "@/types/SiteConfig";

const fetchData = async (): Promise<SiteConfig> => {
    const res = await fetch(`${process.env.API_URL}/site-config?populate=*`, { next: { revalidate: 86400 } });
    return res.json();
}
const Header = async () => {
    const config = await fetchData();

    const menuItems = [
        {
            name: "Home",
            url: '/'
        },
        // {
        //     name: "Blog",
        //     url: '/blog'
        // },
    ]

    return <>
        <Navbar hasLogo logo={`${process.env.MEDIA_URL}${config.data.attributes.logo.data[0].attributes.url}`} title={config.data.attributes.title} menuItems={config.data.attributes.mainMenu}></Navbar>
    </>
}

export default Header;