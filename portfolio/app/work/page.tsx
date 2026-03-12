import DotsBackground from "../components/DotsBackground";
import Link from "next/link";


export default function ProjectsPage() {
  // Website Projects
  const webProjects = [
    { id: 1, title: "Webscraper", desc: "Built with Next.js"  },
    { id: 2, title: "Chat Application", desc: "Analytics platform"  },
    { id: 3, title: "Portfolio Site", desc: "Minimalist design"},
    { id: 4, title: "Task Manager", desc: "Productivity app" },
    { id: 5, title: "Weather Dashboard", desc: "Real-time data" },
    { id: 6, title: "Recipe Finder", desc: "Culinary app"}
    
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
        <DotsBackground />
        
        <div className="flex-1 border-r border-white/10 flex flex-col relative overflow-hidden">
          {/* Header (Same as before) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-14 z-20 p-6 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Web Development</h2>
          </div>

          {/* 2. Map through your unique data */}
          <div className="flex-1 items-start overflow-y-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 p-6 pt-40 gap-5 no-scrollbar relative">
            {webProjects.map((project) => (
              <div 
                key={project.id} 
                className="relative w-50 h-70 p-5  backdrop-blur-none border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group hover:scale-[1.02]  "
              >
                <div />
                <h3 className="text-xl font-sans">{project.title}</h3>
                <p className="font-mono text-sm text-gray-500 mt-2">{project.desc}</p>
                
                
                <Link className=" absolute bottom-15 h-auto uppercase font-mono text-xs left-5 right-5 w-auto mt-auto opacity-0 group-hover:opacity-100 transition-opacity  tracking-widest  backdrop-blur-none border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-3xl  overflow-hidden group-hover:scale-[1.02] 
                  hover:bg-white/10 
                  hover:border-white/30 
                  hover:backdrop-blur-xl 
                  hover:shadow-2xl 
                  hover:shadow-white/5">
                  View Deployed Website
                </Link>
                <Link className="absolute px-4 py-2 bottom-2 left-5 right-5 w-auto font-mono mt-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">
                  View GitHub Repo
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Software Dev side would have its own array (e.g. softwareProjects.map...) */}
        <div className="flex-1 border-r border-white/10 flex flex-col relative overflow-hidden">
          {/* Header (Same as before) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-14 z-20 p-6 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Web Development</h2>
          </div>

          {/* 2. Map through your unique data */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 p-6 pt-40 gap-5 no-scrollbar">
            {webProjects.map((project) => (
              <div 
                key={project.id} 
                className="w-50 h-50 gap-5 p-6 border border-white/20 rounded-3xl bg-gradient-to-br from-white/5 to-transparent hover:bg-white/10 transition-all group"
              >
                <div className={`w-10 h-1 bg-gradient-to-r ${project.color} mb-4`} />
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-white/50 mt-2">{project.desc}</p>
                
                {/* Custom Button for each */}
                <button className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
