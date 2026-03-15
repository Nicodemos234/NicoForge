"use client"

import { cn } from "@/lib/utils"
import { Twitch, Youtube, Github, Instagram, ExternalLink } from "lucide-react"

const links = [
  {
    name: "Twitch",
    url: "https://twitch.tv/forjadonico",
    icon: Twitch,
    description: "Lives de coding e maker",
    color: "hover:border-purple-500 hover:bg-purple-500/10",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@forjadonico",
    icon: Youtube,
    description: "Tutoriais e projetos",
    color: "hover:border-red-500 hover:bg-red-500/10",
  },
  {
    name: "GitHub",
    url: "https://github.com/forjadonico",
    icon: Github,
    description: "Código open source",
    color: "hover:border-foreground hover:bg-foreground/10",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/forjadonico",
    icon: Instagram,
    description: "Bastidores e projetos",
    color: "hover:border-pink-500 hover:bg-pink-500/10",
  },
]

export function LinksSection() {
  return (
    <section id="links" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Meus Links
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Me encontre nas redes
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center gap-4 p-6 rounded-xl border border-border bg-card transition-all duration-300",
                "hover:scale-[1.02] hover:shadow-lg",
                link.color
              )}
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-secondary">
                <link.icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  {link.name}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
