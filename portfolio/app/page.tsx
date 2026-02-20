"use client";
import Image from "next/image";
import Link from "next/link";


import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const capture = document.querySelector(".glow-capture") as HTMLElement | null;
    const overlay = document.querySelector(".glow-overlay") as HTMLElement | null;
    if (!capture || !overlay) return;

    const handleMove = (e: MouseEvent) => {
      const rect = capture.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlay.style.setProperty("--glow-x", `${x}px`);
      overlay.style.setProperty("--glow-y", `${y}px`);
      overlay.style.setProperty("--glow-opacity", "1");
    };

    const handleLeave = () => {
      overlay.style.setProperty("--glow-opacity", "0");
    };

    capture.addEventListener("mousemove", handleMove);
    capture.addEventListener("mouseleave", handleLeave);

    return () => {
      capture.removeEventListener("mousemove", handleMove);
      capture.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <main className="glow-capture bg-black h-screen w-screen gap-8 relative">
        <div className=" fixed left-2 top-70 botton-70 no-glow flex font-mono items-center flex-col justify-center h-auto w-225 gap-5 rounded-4xl  overflow-auto  bg-[rgb(15,14,14)] ">


          <h1 className ="text-5xl mx-5 my-5 ">Welcome</h1>
          <div className ="text-2xl mx-5 my-5">
            <p>Hello. I am a freelance full stack developer specializing in modern web applications with Next.js and MERN. </p>
          </div>
          <div className ="flex flex-row text-s justify-center gap-3 ">
            <div className ="border-2 rounded-md p-2">
              <Link href="/work">
              <button>Projects and Certifications</button>
              </Link>

            </div>
            <div className ="border-2 rounded-md p-2">
              <Link href="/experience">
              <button>Experience and Education</button>
              </Link>

            </div>
            <div className ="border-2 rounded-md p-2">
              <Link href="/reviews">
              <button>Client Reviews and Testimonials</button>
              </Link>

            </div>
            
            
          </div>
          <div className = "grid place-items-center border-2 rounded-md p-2 mx-75 ">
            <Link href="/reviews">
              <button>Work with me on upwork</button>
            </Link>

          </div>
          <div className = "grid place-items-center border-2 rounded-md p-2 mx-75 mb-5">
            <Link href="/reviews">
              <button>Donate</button>
            </Link>

          </div>
          
          
        </div>


        
          <div className="glow-overlay" />
          
        
        
      </main>
    </div>
  );
}
