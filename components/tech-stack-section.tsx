"use client"

const technologies = [
  { name: "TYPESCRIPT", color: "#00ffff" },
  { name: "JAVASCRIPT", color: "#ffff00" },
  { name: "REACT", color: "#00ffff" },
  { name: "NODE.JS", color: "#00ff88" },
  { name: "DEBIAN", color: "#ff3366" },
  { name: "LAZYVIM", color: "#00ff88" },
  { name: "TMUX", color: "#00ff88" },
  { name: "DOCKER", color: "#00ffff" },
  { name: "GIT", color: "#ff00ff" },
  { name: "LINUX", color: "#ffff00" },
]

// Duplicate for infinite scroll effect
const duplicatedTech = [...technologies, ...technologies]

export function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-secondary/50 overflow-hidden relative">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#ff00ff]" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#ff00ff]" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#ff00ff]" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#ff00ff]" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-pixel)] text-xl md:text-2xl text-[#ffff00] mb-4">
            POWER-UPS
          </h2>
          <p className="font-[family-name:var(--font-retro)] text-2xl text-muted-foreground">
            FERRAMENTAS E TECNOLOGIAS DO DIA A DIA
          </p>
        </div>
        
        {/* Infinite marquee - Desktop */}
        <div className="relative hidden md:block">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-3 px-6 py-4 border-4 border-border bg-card hover:border-current transition-all duration-200 hover-glitch group"
              >
                <span 
                  className="font-[family-name:var(--font-pixel)] text-xs transition-colors"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Static grid for mobile */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-3 border-4 border-border bg-card text-center hover:border-current transition-colors"
            >
              <span 
                className="font-[family-name:var(--font-pixel)] text-[8px]"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Stats display */}
        <div className="mt-12 flex justify-center gap-8 font-[family-name:var(--font-pixel)] text-[10px]">
          <div className="text-center">
            <div className="text-[#00ff88] text-lg mb-1">10+</div>
            <div className="text-muted-foreground">SKILLS</div>
          </div>
          <div className="text-center">
            <div className="text-[#00ffff] text-lg mb-1">999</div>
            <div className="text-muted-foreground">COMMITS</div>
          </div>
          <div className="text-center">
            <div className="text-[#ff00ff] text-lg mb-1">24/7</div>
            <div className="text-muted-foreground">CODING</div>
          </div>
        </div>
      </div>
    </section>
  )
}
