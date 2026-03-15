"use client"

import { Twitch, Youtube, Github, Instagram } from "lucide-react"

const links = [
  {
    name: "TWITCH",
    url: "/twitch",
    icon: Twitch,
    description: "LIVES DE CODING",
    color: "#9146ff",
    hoverBg: "hover:bg-[#9146ff]",
  },
  {
    name: "YOUTUBE",
    url: "/youtube",
    icon: Youtube,
    description: "TUTORIAIS",
    color: "#ff0000",
    hoverBg: "hover:bg-[#ff0000]",
  },
  {
    name: "GITHUB",
    url: "/github",
    icon: Github,
    description: "OPEN SOURCE",
    color: "#00ff88",
    hoverBg: "hover:bg-[#00ff88]",
  },
  {
    name: "INSTAGRAM",
    url: "/instagram",
    icon: Instagram,
    description: "BASTIDORES",
    color: "#ff00ff",
    hoverBg: "hover:bg-[#ff00ff]",
  },
]

export function LinksSection() {
  return (
    <section id="links" className="py-20 px-4 bg-secondary/50 relative">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#00ffff]" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#00ffff]" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#00ffff]" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#00ffff]" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-pixel)] text-xl md:text-2xl text-[#00ffff] mb-4">
            SELECT CHANNEL
          </h2>
          <p className="font-[family-name:var(--font-retro)] text-2xl text-muted-foreground">
            ME ENCONTRE NAS REDES
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-6 bg-card border-4 border-border transition-all duration-200 hover:border-current hover-glitch ${link.hoverBg} hover:text-[#0a0a12]`}
              style={{ '--hover-color': link.color } as React.CSSProperties}
            >
              {/* Number indicator */}
              <div className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground group-hover:text-[#0a0a12]">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div 
                className="flex-shrink-0 p-3 border-2 transition-colors"
                style={{ borderColor: link.color }}
              >
                <link.icon className="w-6 h-6" style={{ color: link.color }} />
              </div>
              
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-[family-name:var(--font-pixel)] text-sm mb-1 group-hover:text-[#0a0a12]" style={{ color: link.color }}>
                  {link.name}
                </h3>
                <p className="font-[family-name:var(--font-retro)] text-xl text-muted-foreground group-hover:text-[#0a0a12]/70">
                  {link.description}
                </p>
              </div>
              
              {/* Arrow */}
              <div className="font-[family-name:var(--font-pixel)] text-xs opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-[#0a0a12]">
                {">>"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
