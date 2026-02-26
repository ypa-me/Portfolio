"use client";
import Image from "next/image";
import Link from "next/link";
import DotsBackground from './components/DotsBackground';
import StarCrux from './components/StarCrux';
import DiamondCross from './components/DiamondCross';
import FalseCross from './components/FalseCross';


import { useEffect } from "react";

export default function Home() {
  
    
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      
      <main className="w-full h-full snap-none">



         
      <section className="h-screen flex  justify-center bg-black relative">
        <DotsBackground />
        
        <div className="absolute left-8 py-5 px-5 w-175 top-1/2 -translate-y-1/2 z-10 ">
        <h1 className=" font-ppmori text-5xl  ">
            Achieve perfection even if its impossible.
          </h1>
          
          <p className="font-mono text-xl md:text-2xl py-5 ">
            We often focus on the unattainability of perfection, but we often forget that we can get infinitely closer to it.
          </p>
        </div>

        

        <div className="absolute top-12 bottom-12 right-12 h-200 w-150 ">
          <StarCrux sizeW={535} sizeH={750} />
        </div>
        
    </section>







      

      <section className="h-screen flex  justify-center  relative">
        <div className="absolute right-0  w-200 top-1/2 -translate-y-1/2 z-10 ">
        <p className="font-serif text-2xl text-gray-500 ">Yashvin P.</p>
          <h3 className="font-sans text-5xl md:text-4xl font-light text-white">Freelancer | Web and Software developer</h3>
          <p className="font-mono text-xl md:text-2xl pt-5 text-gray-300 ">
            Problems should be solved with the utmost accuracy.

          </p>
          <div className="absolute left-0 flex justify-center  ">
            
            <div className = " p-2 bg-white/2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-2xl  overflow-hidden group">
              <p className="font-sans text-2xl text-gray-300 ">Websites</p>
            </div>
            <div className ="p-2"><p className="font-mono text-2xl text-gray-300   ">and</p></div>
            <div className = " p-2 bg-white/2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-2xl  overflow-hidden group">
              <p className="font-sans text-2xl text-gray-300  ">Software</p>
            </div>
            <div className ="p-2"><p className="font-mono text-2xl text-gray-300  ">allow us to do exactly that.</p></div>
          </div>
          <div className ="absolute flex items-center"> <p className =" 
          font-serif text-s pt-20 text-gray-500">Mauritius | UTC + 4:00 </p></div>
          

          

          
        </div>
         <div className="absolute top-12 bottom-12 left-12 h-200 w-150 ">
          <DiamondCross sizeW={470} sizeH={640} />
        </div>
      </section>









      <section className="h-screen  flex justify-center relative ">
        <div className="absolute left-8 w-200 top-1/2 -translate-y-1/2 z-10">
          <h2 className="font-sans text-5xl md:text-4xl font-light">What I believe in</h2>
          
          <div className="absolute flex justify-center gap-5 py-10">
            <div className =" w-75 h-75 p-1  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group">
              <p className ="font-mono text-2xl text-gray-300">Freedom and ability to express your ideas into fruition.</p>
            </div>

          </div>
          
        </div>
        <div className= "absolute top-12 bottom-12 right-12 h-200 w-150" >
          <FalseCross sizeW={460} sizeH={900} />
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
