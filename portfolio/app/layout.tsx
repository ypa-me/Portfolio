import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const ppmori = localFont({
  src: '../public/fonts/PPMori/PPMori-SemiBold.otf',  
  variable: '--font-ppmori',
  weight: '300',
});

const jetbrains = localFont({
  src: '../public/fonts/JetBrainsMono/JetBrainsMono-Light.ttf',
  variable: '--font-jetbrains',
  weight: '300',
});
const Libre = localFont({
  src: '../public/fonts/LibreBaskerville/LibreBaskerville-Regular.ttf',
  variable: '--font-Libre',
  weight: '300',
});
const Hand=localFont({
  src: '../public/fonts/Hand/ArchitectsDaughter-Regular.ttf',
  variable: '--font-Hand',
  weight: '300',
});


export const metadata: Metadata = {
  title: "YPA",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppmori.variable} ${jetbrains.variable} ${Libre.variable} ${Hand.variable} overflow-x-hidden no-scrollbar`}>
      <body className="overflow-clip">
        <header className="fixed top-0 left-0 w-full h-12 flex items-center bg-black z-[100]">
  <div className=" absolute left-0">
    <Image
      src="/Black Outline Light.png"
      alt="Main logo"
      width={120}   
      height={32}   
      priority
      className="object-contain"
    />
  </div>
  <div className="absolute right-4 flex flex-row gap-2 items-center">
  <Link href="/work" className="relative bg-white/1 font-mono text-xs w-auto h-auto text-center p-2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-gray-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-gray-500/20">
    My work 
  </Link>
  <Link href="/reviews" className="relative bg-white/1 font-mono text-xs w-auto h-auto text-center p-2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-gray-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-gray-500/20">
    Reviews 
  </Link>
  <Link href="/blog" className="relative bg-white/1 font-mono text-xs w-auto h-auto text-center p-2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-gray-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-gray-500/20">
    Blog 
  </Link>
  <Link href="https://www.paypal.com/ncp/payment/R9QD6UHBYMJXY" className="relative bg-white/1 font-mono text-xs w-auto h-auto text-center p-2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-yellow-500/20">
    Donate 
  </Link>
  <Link href="https://www.upwork.com/freelancers/~01dad57f09646f0483?mp_source=share" className="relative bg-white/1 font-mono text-xs w-auto h-auto text-center p-2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-green-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-green-500/20">
    Work With Me 
  </Link>
</div>
</header>
        
        
        <main className ="flex-1 bg-black">{children}</main>
        <footer className=" align-left   dark:border-zinc-700 bg-black ">
          
        
      </footer>
        
      </body>
    </html>
  );
}
