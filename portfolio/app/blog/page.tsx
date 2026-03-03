import fs from "fs"
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";


import DotsBackground from "../components/DotsBackground";
interface Post {
    slug: string;
    title: string;
    date: string;
}

export default function BlogPage() {
    const contentDirectory = path.join(process.cwd(), "content");
    const fileNames = fs.readdirSync(contentDirectory);

    const posts = fileNames.map((fileName: string) => {
        const slug = fileName.replace(".md", "");
        const filePath = path.join(contentDirectory, fileName);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data,content } = matter(fileContent);


        return {
            slug,
            title: data.title || slug,
            date: data.date || "Unknown Date",
            excerpt: content.trim().slice(0,500) + "... Click to read more" || content.slice(0, 150) + "... Click to read more",
        };
    }
    );
    return (
        
        <main className=" min-h-screen  bg-black">
            <section className="pt-14 md:py-20 ">
                <DotsBackground />
                <div className="mx-auto w-full max-w-4xl h-auto px-4 py-8 md:px-0 bg-white/1 backdrop-blur-xs border-2 border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-2xl  overflow-hidden group">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block  mb-6 p-5 my-5 mx-10 border-t-2 border-l-0 border-b-0 border-r-0 border-white/20  hover:bg-white/10 transition-colors">
                            <h2 className=" text-xl font-sans text-red-600">{post.title}</h2>
                            <p className="text-sm font-serif text-gray-500">{post.date}</p>
                            <div className=" max-w-none  font-mono  text-gray-300"><ReactMarkdown
                            components={{
                                h1 : ({ children }) => (<h1 className="text-3xl font-sans text-red-900">{children}</h1>),
                                h2 : ({ children }) => (<h2 className="text-2xl font-sans text-red-900">{children}</h2>),
                                h3 : ({ children }) => (<h3 className="text-lg font-sans text-red-900">{children}</h3>),
                                
                                p:  ({ children }) => (<p className="font-mono text-base text-gray-500">{children}</p>),
                            }}>{post.excerpt}</ReactMarkdown></div>

                        </Link>
                    ))}
                    
                </div>
            </section>
            
            
                


            
        </main>
    );
}
