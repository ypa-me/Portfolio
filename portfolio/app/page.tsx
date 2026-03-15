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
    // //here: Added max-w-full and relative to the wrapper
    <div className="bg-zinc-50 font-sans overflow-x-hidden max-w-full relative">
      {/* //here: Added overflow-x-hidden and w-full to main */}
      <main className="no-scrollbar w-full h-full bg-black overflow-x-hidden text-white">

      <section className="h-screen max-w-full flex justify-center bg-black relative overflow-hidden">
        <DotsBackground />
        <div className=" absolute  max-w-4xl left-4 p-10 top-1/2 -translate-y-1/2 z-10 ">
          <h1 className=" font-sans text-3xl md:text-4xl xl:text-5xl font-light text-white">
            Master the complexity of your life, work or businesses.
          </h1>
        </div>
        <div className="absolute hidden xl:block top-12 bottom-12 right-12 h-200 w-150 ">
          <StarCrux sizeW={535} sizeH={750} />
        </div>
      </section>

      <section className="h-screen flex justify-center relative overflow-hidden">
        <div className=" absolute max-w-full max-w-4xl right-4 p-10 top-1/2 -translate-y-1/2 z-10 ">
          <p className="font-serif text-md md:text-md xl:text-2xl text-gray-500 ">Yashvin P.</p>
          <h3 className="font-sans text-3xl md:text-4xl xl:text-5xl font-light text-white">Freelancer | Web and Software developer</h3>
          <p className="font-mono text-xl md:text-lg xl:text-2xl pt-5 text-gray-300 ">
            Your problems are unique. Your solutions should be too.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xl md:text-lg xl:text-2xl text-gray-300">Custom</span>
            <div className="p-1 bg-white/5 backdrop-blur-xs border border-white/20 rounded-2xl">
              <p className="font-sans text-xl md:text-lg xl:text-2xl text-gray-300">Websites</p>
            </div>
            <span className="font-mono text-xl md:text-lg xl:text-2xl text-gray-300">and</span>
            <div className="p-1 bg-white/5 backdrop-blur-xs border border-white/20 rounded-2xl">
              <p className="font-sans text-xl md:text-lg xl:text-2xl text-gray-300">Software</p>
            </div>
            <span className="font-mono text-xl md:text-lg xl:text-2xl text-gray-300">is how I build for your specific needs.</span>
          </div>
          <div className ="font-serif mt-10 text-md md:text-md xl:text-2xl text-gray-500"><p>Mauritius | UTC + 4:00 </p></div>
        </div>
         <div className="absolute hidden xl:block top-12 bottom-12 left-12 h-200 w-150 ">
          <DiamondCross sizeW={460} sizeH={900} />
        </div>
      </section>

      {/* //here: Added overflow-hidden to this section to stop the cards from bleeding */}
      <section className="min-h-screen lg:h-screen flex justify-center relative py-20 lg:py-0 overflow-hidden">
        <div className="lg:absolute left-8 my-52 w-full max-w-6xl px-4 lg:top-1/2 lg:-translate-y-1/2 z-10">
          <h2 className="font-sans text-2xl md:text-4xl xl:text-5xl mb-10 lg:mb-0">What I believe in</h2>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-5 py-10 ">
            {[
              "Freedom and ability to express your ideas into fruition.",
              "Solving problems should feel effortless and fun.",
              "Passion is the key to greatness."
            ].map((text, i) => (
              <div key={i} className ="w-full md:w-1/3 lg:w-60 lg:h-75 p-5 bg-white/1 backdrop-blur-xs border border-white/20 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all">
                <p className ="font-mono text-lg md:text-xl xl:text-2xl text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className= "absolute hidden xl:block top-12 bottom-12 right-12 h-200 w-150" >
          <FalseCross sizeW={641} sizeH={750} />
        </div>
      </section>

      {/* //here: Added overflow-hidden */}
      <section className="min-h-screen lg:h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
        <h3 className="font-sans text-3xl md:text-4xl xl:text-5xl mb-10">If you want</h3>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
            <div className ="w-full md:w-64 lg:w-48 h-auto md:h-60 p-5 bg-white/1 border border-white/20 rounded-3xl">
              <p className="font-mono text-xl md:text-2xl">Fast Delivery</p>
              <p className="font-mono text-md text-gray-500">within weeks</p>
            </div>
            <div className ="w-full md:w-80 lg:w-96 h-auto md:h-60 p-5 bg-white/1 border border-white/20 rounded-3xl">
              <p className="font-mono text-xl md:text-2xl">Scalability and Reliability</p>
              <p className="font-mono text-md text-gray-500">Extensive testing and futureproofing</p>
            </div>
            <div className ="w-full md:w-72 lg:w-64 h-auto md:h-60 p-5 bg-white/1 border border-white/20 rounded-3xl">
              <p className="font-mono text-xl md:text-2xl">Endless Customisation</p>
              <p className="font-mono text-md text-gray-500">Make it your own</p>
            </div>
            <div className ="w-full md:w-64 lg:w-56 h-auto md:h-60 p-5 bg-white/1 border border-white/20 rounded-3xl">
              <p className="font-mono text-xl md:text-2xl">Quality</p>
              <p className="font-mono text-md text-gray-500">Extreme attention to detail</p>
            </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center gap-12 px-4">
          <h2 className="font-sans text-3xl md:text-5xl text-white text-center">You have the right person for the job.</h2>
          <Link href="https://www.upwork.com/freelancers/~01dad57f09646f0483" className="font-mono text-xl md:text-2xl p-5 bg-white/1 border border-white/20 rounded-3xl transition-all hover:scale-[1.02] hover:bg-green-500/50">Work With Me</Link>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <Link href="/work" className="font-mono text-xl md:text-2xl w-44 p-5 text-center bg-white/1 border border-white/20 rounded-3xl hover:bg-white/5 transition-all">My Work</Link>
            <Link href="/results" className="font-mono text-xl md:text-2xl w-44 p-5 text-center bg-white/1 border border-white/20 rounded-3xl hover:bg-white/5 transition-all">Reviews</Link>
            <Link href="/blog" className="font-mono text-xl md:text-2xl w-44 p-5 text-center bg-white/1 border border-white/20 rounded-3xl hover:bg-red-500/50 transition-all">My Blog</Link>
          </div>
          <Link href="/results" className="font-mono text-xl md:text-2xl p-5 bg-white/1 border border-white/20 rounded-3xl hover:bg-yellow-500/50 transition-all">Donate</Link>
        </div>
      </section>
    </main>
    </div>
  );
}