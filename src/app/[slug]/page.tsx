import RenderBlock from "@/components/RenderBlock";
import ColorText from "@/components/ui/ColorText";
import { StrapiPage } from "@/types/StrapiPage";
import { fetchStrapi } from "@/utils/fetchStrapi";

const fetchData = async (): Promise<StrapiPage> => {
    const res = await fetchStrapi(`/pages`, {
        filters: {
            slug: {
                $eq: "about"
            }
        },
        populate: {
            blocks: {
                populate: "*"
            }
        },
    }, { next: { revalidate: 86400 } });
    console.log("RESPOSTA", res.data[0].attributes);
    return res.data[0];
}

const Page = async () => {
    const pageData = await fetchData();
    return (
        <div>
             <div className="container mx-auto px-4">
                {/* Blog Header */}
                <div className="mt-24 mb-12">
                    <h2 className="font-semibold text-xl">/{pageData.attributes.slug}</h2>
                    <h3 className="font-medium text-6xl mt-2">{pageData.attributes.subtitle}</h3>
                    <p className="mt-6 max-w-md">{pageData.attributes.description}</p>
                </div>
                {pageData.attributes.blocks.map(x => (
                    <RenderBlock block={x}></RenderBlock>
                ))}
            </div>
        </div>
    );
};

export default Page;