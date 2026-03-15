import DotsBackground from "../components/DotsBackground";
import Link from "next/link";
import Image from "next/image"; 

export default function ProjectsPage() {
  
  
  const webProjects = [
    { id: 1, title: "My Portfolio", desc: "A portfolio website that shows my projects, skills, reviews/testimonials and also has my blog.", image: "/projects/scraper.jpg",skills: ["Next.js", "TypeScript", "Tailwind"],liveURL:"https://ypa.one",repoURL:"" },

    { id: 2, title: "Business CRM", desc: "A business website for SMB that does simple CRM workflows.",skills: ["Next.js", "TypeScript", "Tailwind","PocketBase", "n8n"], image: "/Jane-Business.png",liveURL:"https://jane-business.ypa.one",repoURL:"" },
    { id: 3, title: "My Portfolio", desc: "A portfolio website that shows my projects, skills, reviews/testimonials and also has my blog.", image: "/projects/scraper.jpg",skills: ["Next.js", "TypeScript", "Tailwind"],liveURL:"https://ypa.one",repoURL:"" },

    { id: 4, title: "Business CRM", desc: "A business website for SMB that does simple CRM workflows.",skills: ["Next.js", "TypeScript", "Tailwind","PocketBase", "n8n"], image: "/Jane-Business.png",liveURL:"https://jane-business.ypa.one",repoURL:"" },

    
  ];
  const softwareProjects = [
    { id: 1, title: "My Portfolio", desc: "A portfolio website that shows my projects, skills, reviews/testimonials and also has my blog.", image: "/projects/scraper.jpg",skills: ["Next.js", "TypeScript", "Tailwind"],liveURL:"https://ypa.one",repoURL:"" },

    { id: 2, title: "Business CRM", desc: "A business website for SMB that does simple CRM workflows.",skills: ["Next.js", "TypeScript", "Tailwind","PocketBase", "n8n"], image: "/Jane-Business.png",liveURL:"https://jane-business.ypa.one",repoURL:"" },
    { id: 3, title: "My Portfolio", desc: "A portfolio website that shows my projects, skills, reviews/testimonials and also has my blog.", image: "/projects/scraper.jpg",skills: ["Next.js", "TypeScript", "Tailwind"],liveURL:"https://ypa.one",repoURL:"" },

    { id: 4, title: "Business CRM", desc: "A business website for SMB that does simple CRM workflows.",skills: ["Next.js", "TypeScript", "Tailwind","PocketBase", "n8n"], image: "/Jane-Business.png",liveURL:"https://jane-business.ypa.one",repoURL:"" },

    
  ];


  return (
    <main className="min-h-screen bg-black text-white">
      {/* Changed to flex-col by default, flex-row only on xl screens */}
      <section className="flex flex-col xl:flex-row min-h-screen w-full">
        <DotsBackground />
        
        {/* Container for one category */}
        <div className="flex-1 border-b xl:border-b-0 xl:border-r border-white/10 flex flex-col relative min-h-[50vh] xl:h-screen overflow-hidden">
          
          {/* Header */}
          <div className="absolute left-1/2 -translate-x-1/2 top-14 z-20 
                  p-6 backdrop-blur-md border border-white/20 rounded-3xl 
                  w-[90%] max-w-max text-center shadow-2xl">
            <h2 className=" text-xl md:text-2xl font-bold uppercase tracking-tighter ">Web Development</h2>
          </div>

          {/* Grid: responsive columns */}
          <div className=" overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 p-6 pt-40 gap-5 no-scrollbar relative">
            {webProjects.map((project) => (
  <div 
    key={project.id} 
    className="relative flex flex-col w-full min-h-[400px] backdrop-blur-none border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
  >
    
    <div className="relative w-full aspect-video overflow-hidden  bg-white/0">
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white/10 uppercase tracking-widest text-[10px]">
          No Preview Available
        </div>
      )}
    </div>

    {/* 2. TEXT & CONTENT AREA */}
    <div className="flex flex-col flex-1 p-5">
      <div className="text-center">
        <h3 className="text-xl font-sans font-bold tracking-tight break-words uppercase">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-gray-400 mt-2 break-words leading-relaxed">
          {project.desc}
        </p>
      </div>

      {/* 3. SKILLS TAGS SECTION */}
      <div className="mt-4 mb-6 flex flex-wrap justify-center gap-2">
        {project.skills?.map((skill, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-white/70 border border-white/10 bg-white/5 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* 4. BUTTONS (Live & Repo) */}
      <div className="mt-auto flex gap-3">
        <Link 
          href={project.liveURL || "#"} 
          className="flex-1 py-2 text-center text-[10px] uppercase font-mono tracking-widest border border-white/20 rounded-full hover:bg-white/10 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
        >
          Live
        </Link>
        <Link 
          href={project.repoURL || "#"} 
          className="flex-1 py-2 text-center text-[10px] uppercase font-mono tracking-widest border border-white/20 rounded-full hover:bg-white/10 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
        >
          Repo
        </Link>
      </div>
    </div>
  </div>
))}
          </div>
        </div>

        {/* Software Dev side (Duplicate structure) */}
        <div className="flex-1 border-b xl:border-b-0 xl:border-r border-white/10 flex flex-col relative min-h-[50vh] xl:h-screen overflow-hidden">
          
          {/* Header */}
          <div className="absolute left-1/2 -translate-x-1/2 top-14 z-20 
                  p-6 backdrop-blur-md border border-white/20 rounded-3xl 
                  w-[90%] max-w-max text-center shadow-2xl">
            <h2 className=" text-xl md:text-2xl font-bold uppercase tracking-tighter ">Software Development</h2>
          </div>

          {/* Grid: responsive columns */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 p-6 pt-40 gap-5 no-scrollbar relative">
            {softwareProjects.map((project) => (
  <div 
    key={project.id} 
    className="relative flex flex-col w-full min-h-[400px] backdrop-blur-none border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
  >
    
    <div className="relative w-full aspect-video overflow-hidden  bg-white/0">
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white/10 uppercase tracking-widest text-[10px]">
          No Preview Available
        </div>
      )}
    </div>

    {/* 2. TEXT & CONTENT AREA */}
    <div className="flex flex-col flex-1 p-5">
      <div className="text-center">
        <h3 className="text-xl font-sans font-bold tracking-tight break-words uppercase">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-gray-400 mt-2 break-words leading-relaxed">
          {project.desc}
        </p>
      </div>

      {/* 3. SKILLS TAGS SECTION */}
      <div className="mt-4 mb-6 flex flex-wrap justify-center gap-2">
        {project.skills?.map((skill, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-white/70 border border-white/10 bg-white/5 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* 4. BUTTONS (Live & Repo) */}
      <div className="mt-auto flex gap-3">
        <Link 
          href={project.liveURL || "#"} 
          className="flex-1 py-2 text-center text-[10px] uppercase font-mono tracking-widest border border-white/20 rounded-full hover:bg-white/10 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
        >
          Live
        </Link>
        <Link 
          href={project.repoURL || "#"} 
          className="flex-1 py-2 text-center text-[10px] uppercase font-mono tracking-widest border border-white/20 rounded-full hover:bg-white/10 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
        >
          Repo
        </Link>
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </section>
    </main>
  );
}