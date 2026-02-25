"use client";
import Image from "next/image";
import Link from "next/link";
import DotsBackground from './components/DotsBackground';
import StarCrux from './components/StarCrux';


import { useEffect } from "react";

export default function Home() {
  
    
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      
      <main className="w-full h-full snap-none">



         
      <section className="h-screen flex  justify-center bg-black relative">
        <DotsBackground />
        <h1 className="absolute top-0 font-ppmori text-5xl  ">
            Achieve perfection even if its impossible.
          </h1>
        <div className="absolute left-8 w-200 top-1/2 -translate-y-1/2 z-10 
                
                 bg-white/5 backdrop-blur-1
                
                border border-white/10 shadow-xl 
                rounded-3xl p-5 overflow-hidden group">
          
          <p className="font-mono text-xl md:text-2xl text-slate-300">
            We often focus on the unattainability of perfection, but we often forget that we can get infinitely closer to it.
          </p>
        </div>

        
  
  
          








        <div className="absolute top-12 bottom-12 right-12 h-200 w-150 ">
          <StarCrux sizeW={600} sizeH={750} />
        </div>
        
      </section>





      

      <section className="h-screen bg-black  flex items-center px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-ppmori text-5xl md:text-6xl font-extralight mb-12">About</h2>
          <p className="font-jetbrains-light text-lg md:text-xl leading-relaxed max-w-2xl">
            Junior full stack developer focused on Next.js, React, Node.js, and modern web technologies.
          </p>
        </div>
      </section>

      <section className="h-screen bg-black flex items-center px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-ppmori text-5xl md:text-6xl font-extralight mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-slate-600/50 transition-all duration-300">
              <h3 className="font-jetbrains-light text-2xl mb-4 group-hover:text-white">Portfolio Site</h3>
              <p className="font-jetbrains-light text-slate-300">Next.js 16 + Tailwind + Custom Fonts</p>
            </div>
            <div className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-slate-600/50 transition-all duration-300">
              <h3 className="font-jetbrains-light text-2xl mb-4 group-hover:text-white">MERN Project</h3>
              <p className="font-jetbrains-light text-slate-300">Full stack app with MongoDB, Express, React</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-black flex items-center justify-center px-8">
        <div className="text-center">
          <h2 className="font-ppmori text-5xl md:text-6xl font-[200] mb-12">Let's Work Together</h2>
          <p className="font-jetbrains-light text-2xl text-slate-400 mb-8">Upwork: ypersand</p>
          <a href="#contact" className="font-jetbrains-light bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-xl text-lg transition-all duration-300">
            Hire Me
          </a>
        </div>
      </section>
    </main>
    </div>
  );
}
