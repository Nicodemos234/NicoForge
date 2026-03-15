"use client"

import { cn } from "@/lib/utils"

const technologies = [
  { name: "TypeScript", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Debian", color: "text-red-400" },
  { name: "LazyVim", color: "text-green-500" },
  { name: "tmux", color: "text-emerald-400" },
  { name: "Docker", color: "text-blue-500" },
  { name: "Git", color: "text-orange-400" },
  { name: "Linux", color: "text-amber-400" },
]

// Duplicate for infinite scroll effect
const duplicatedTech = [...technologies, ...technologies]

export function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Tech Stack
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Ferramentas e tecnologias do dia a dia
        </p>
        
        {/* Infinite marquee */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
              >
                <span className={cn(
                  "font-mono text-lg font-medium transition-colors",
                  "text-muted-foreground group-hover:text-foreground",
                  tech.color && `group-hover:${tech.color}`
                )}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Static grid for mobile */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:hidden">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-3 rounded-lg border border-border bg-card text-center hover:border-primary/50 transition-colors"
            >
              <span className="font-mono text-sm text-muted-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
