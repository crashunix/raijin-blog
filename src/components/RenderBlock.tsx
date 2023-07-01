import { StrapiBlock, StrapiBlockType } from "@/types/StrapiPage";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type RenderBlockParams = {
    block: StrapiBlock
}

const RenderBlock: React.FC<RenderBlockParams> = ({ block }) => {
    switch (block.__component) {
        case StrapiBlockType.RichText:
            return <Markdown children={block.content!} remarkPlugins={[remarkGfm]} />
        case StrapiBlockType.Slider:
            return <span>Slider</span>
    }
};

export default RenderBlock;