"use client";
import Image from "next/image";
import Link from "next/link";
import DotsBackground from './components/DotsBackground';
import StarCrux from './components/StarCrux';
import DiamondCross from './components/DiamondCross';
import FalseCross from './components/FalseCross';
import navigation from "next/navigation";


import { useEffect } from "react";

export default function Home() {
  
    
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      
      <main className="w-full h-full snap-none">



         
      <section className="h-screen flex  justify-center bg-black relative">
        <DotsBackground />
        
        <div className="absolute left-8 py-5 px-5 w-175 top-1/2 -translate-y-1/2 z-10 ">
        <h1 className=" font-ppmori text-5xl  ">
            Achieve high-performance systems that turn complex ideas into scalable reality.
          </h1>
          
          
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
            
            <div className = " p-2 bg-white/2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-2xl  hover:scale-[1.02] ">
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
          <DiamondCross sizeW={460} sizeH={900} />
        </div>
      </section>









      <section className="h-screen  flex justify-center relative ">
        <div className="absolute left-8 w-200 top-1/2 -translate-y-1/2 z-10">
          <h2 className="font-sans text-5xl md:text-4xl font-light">What I believe in</h2>
          
          <div className="absolute flex justify-center gap-5 py-10">
            <div className =" w-50 h-70 p-5  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group
            hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                  hover:backdrop-blur-xl 
                  hover:shadow-2xl 
                  hover:shadow-white/5">
              <p className ="font-mono text-2xl text-gray-300">Freedom and ability to express your ideas into fruition.</p>
            </div>
            <div className =" w-50 h-70 p-5  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                  hover:backdrop-blur-xl 
                  hover:shadow-2xl 
                  hover:shadow-white/5">
              <p className ="font-mono text-2xl text-gray-300">Solving problems should feel effortless and fun.</p>
            </div>
            <div className =" w-50 h-70 p-5  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group
                    hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                    hover:backdrop-blur-xl 
                    hover:shadow-2xl 
                    hover:shadow-white/5">
              <p className ="font-mono text-2xl text-gray-300">Passion is the key to greatness.</p>
            </div>

          </div>
          
        </div>
        <div className= "absolute top-12 bottom-12 right-12 h-200 w-150" >
          <FalseCross sizeW={641} sizeH={750} />
        </div>
      </section>








      <section className="h-screen  flex justify-center relative overflow-hidden ">

        <h3 className="absolute font-sans text-4xl top-20 flex justify-center">If you want</h3>
        
            <div className="absolute left-10 top-25 -rotate-55   ">
              <StarCrux sizeW={285} sizeH={400} />
            </div>








            <div className =" absolute  left-10 bottom-20 w-40 h-40 p-5  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group
                    hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                    hover:backdrop-blur-xl 
                    hover:shadow-2xl 
                    hover:shadow-white/5">
                      <p className="font-mono text-2xl">Fast Delivery </p>
                      <p className="font-mono text-md text-gray-500">within weeks</p>

            </div>
            <div className =" absolute  left-175 bottom-60 w-75 h-40 p-5  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group
                    hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                    hover:backdrop-blur-xl 
                    hover:shadow-2xl 
                    hover:shadow-white/5">
                      <p className="font-mono text-2xl">Scalability and Reliability</p>
                      <p className="font-mono text-md text-gray-500">Extensive testing and futureproofing</p>

            </div>
            <div className =" absolute  right-20 bottom-30 w-60 h-40 p-5  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group
                    hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                    hover:backdrop-blur-xl 
                    hover:shadow-2xl 
                    hover:shadow-white/5">
                      <p className="font-mono text-2xl">Endless Customisation</p>
                      <p className="font-mono text-md text-gray-500">Make it your own</p>

            </div>
            <div className =" absolute  left-100 top-40 w-40 h-50 p-5  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group
                    hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                    hover:backdrop-blur-xl 
                    hover:shadow-2xl 
                    hover:shadow-white/5">
                      <p className="font-mono text-2xl">Quality</p>
                      <p className="font-mono text-md text-gray-500">Extreme attention to detail</p>

            </div>









            <div className=" absolute -rotate-35 bottom-10 left-250">
              <DiamondCross sizeW={490} sizeH={760} />
              
            </div>


            
            <div className=" absolute -rotate-50 top-20 right-5  ">
              <FalseCross sizeW={300} sizeH={400} />
              
            </div>
          
        
      </section>











      <section className="h-screen flex items-center justify-center relative overflow-hidden">
  <div className="flex flex-col items-center gap-12">
    <h2 className="font-sans text-5xl text-white text-center">
      You have the right person for the job.
    </h2>
    <Link href="https://www.upwork.com/freelancers/~01dad57f09646f0483" className="font-mono text-2xl w-auto p-5 text-center  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-green-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-green-500/20">
        Work With Me 
      </Link>

    <div className="flex flex-row items-center justify-center gap-10">
      <Link href="/results" className="font-mono text-2xl w-44 p-5 text-center  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-white/5 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-white/5">
        My Work
      </Link>

      <Link href="/results" className="font-mono text-2xl w-44 p-5 text-center  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-white/5 hover:border-white/5 hover:backdrop-blur-md hover:shadow-2xl hover:shadow-white/5">
        Reviews
      </Link>

      <Link href="/results" className="font-mono text-2xl w-44 p-5 text-center  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-red-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-red-500/20">
        My Blog
      </Link>
    </div>
    <Link href="/results" className="font-mono text-2xl w-auto p-5 text-center  backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-500/50 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-yellow-500/20">
        Donate
      </Link>

  </div>
</section>
    </main>
    </div>
  );
}
