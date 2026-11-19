import Image from "next/image";
import { safeUrl } from "@/lib/blog.mjs";

function Inline({ nodes = [] }) {
  return nodes.map((node, index) => {
    if (node.type === "link") {
      const href = safeUrl(node.url);
      return href ? <a key={index} href={href} rel="noopener noreferrer"><Inline nodes={node.children}/></a> : <Inline key={index} nodes={node.children}/>;
    }
    let text = node.text || "";
    if (node.code) text = <code>{text}</code>;
    if (node.bold) text = <strong>{text}</strong>;
    if (node.italic) text = <em>{text}</em>;
    if (node.underline) text = <u>{text}</u>;
    if (node.strikethrough) text = <s>{text}</s>;
    return <span key={index}>{text}</span>;
  });
}

export default function ArticleBody({ blocks = [] }) {
  return blocks.map((block, index) => {
    if (block.type === "heading") { const Heading = `h${Math.min(6, Math.max(2, Number(block.level) || 2))}`; return <Heading key={index}><Inline nodes={block.children}/></Heading>; }
    if (block.type === "quote") return <blockquote key={index}><Inline nodes={block.children}/></blockquote>;
    if (block.type === "code") return <pre key={index}><code>{(block.children || []).map(node => node.text || "").join("")}</code></pre>;
    if (block.type === "list") { const List = block.format === "ordered" ? "ol" : "ul"; return <List key={index}>{(block.children || []).map((node, i) => <li key={i}>{node.children?.some(child => child.type === "list") ? <ArticleBody blocks={node.children}/> : <Inline nodes={node.children}/>}</li>)}</List>; }
    if (block.type === "image") { const src = safeUrl(block.image?.url); return src ? <figure key={index}><Image src={src} alt={block.image.alternativeText || ""} width={block.image.width || 1200} height={block.image.height || 800} unoptimized />{block.image.caption && <figcaption>{block.image.caption}</figcaption>}</figure> : null; }
    return <p key={index}><Inline nodes={block.children}/></p>;
  });
}
