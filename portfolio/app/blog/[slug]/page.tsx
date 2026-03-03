import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const filePath = path.join(process.cwd(), "content", `${decodeURIComponent(slug)}.md`);

    const fileContent =fs.readFileSync(filePath, 'utf8');

    const { data,content } = matter(fileContent);

    return(
        <main className='p-10 bg-black min-h-screen'>
            <div className="mt-15">
                <h1 className='  font-sans text-xl text-red-500 mb-4'>{data.title}</h1>
            <article ><ReactMarkdown
                                        components={{
                                            h1 : ({ children }) => (<h1 className="text-3xl font-sans text-red-700">{children}</h1>),
                                            h2 : ({ children }) => (<h2 className="text-lg font-sans text-red-900">{children}</h2>),
                                            h3 : ({ children }) => (<h3 className="text-base font-sans text-red-900">{children}</h3>),
                                            
                                            p:  ({ children }) => (<p className="font-mono text-base text-gray-500">{children}</p>),
                                        }}>{content}</ReactMarkdown></article>
            

            </div>

            
        </main>
    )


}