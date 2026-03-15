"use client"

import { Keyboard, Cpu, Printer, Network } from "lucide-react"

const projects = [
  {
    title: "NICODECK",
    description: "Macropad customizado com display LCD e integracao com OBS. Controle total sobre suas lives.",
    tags: ["TYPESCRIPT", "REACT", "HARDWARE"],
    icon: Cpu,
    level: "LV.99",
    color: "#00ff88",
  },
  {
    title: "TECLADO SPLIT",
    description: "Teclado ergonomico split com layout ortolinear, firmware QMK e case impressa em 3D.",
    tags: ["ELETRONICA", "DIY", "FIRMWARE"],
    icon: Keyboard,
    level: "LV.85",
    color: "#00ffff",
  },
  {
    title: "IMPRESSAO 3D",
    description: "Ender 3 modificada com Direct Drive, Klipper e sistema de troca rapida de toolhead.",
    tags: ["ENDER 3", "MODDING", "MAKER"],
    icon: Printer,
    level: "LV.72",
    color: "#ff00ff",
  },
  {
    title: "AUTOMACAO",
    description: "Homelab com servidores Debian, Docker containers, automacoes e monitoramento.",
    tags: ["DEBIAN", "INFRA", "SCRIPTS"],
    icon: Network,
    level: "LV.90",
    color: "#ffff00",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-pixel)] text-xl md:text-2xl text-[#ff00ff] mb-4">
            INVENTORY
          </h2>
          <p className="font-[family-name:var(--font-retro)] text-2xl text-muted-foreground max-w-2xl mx-auto">
            PROJETOS QUE MISTURAM HARDWARE, SOFTWARE E CRIATIVIDADE
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group bg-card border-4 border-border p-6 transition-all duration-200 hover:border-current hover-glitch"
              style={{ '--hover-border': project.color } as React.CSSProperties}
            >
              {/* Header with icon and level */}
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="p-3 border-2"
                  style={{ borderColor: project.color }}
                >
                  <project.icon className="w-8 h-8" style={{ color: project.color }} />
                </div>
                <span 
                  className="font-[family-name:var(--font-pixel)] text-xs"
                  style={{ color: project.color }}
                >
                  {project.level}
                </span>
              </div>
              
              {/* Title */}
              <h3 
                className="font-[family-name:var(--font-pixel)] text-sm md:text-base mb-3"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="font-[family-name:var(--font-retro)] text-xl text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="font-[family-name:var(--font-pixel)] text-[8px] px-2 py-1 border-2 text-muted-foreground border-border hover:border-current transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Bottom bar - like HP bar */}
              <div className="mt-6 h-2 bg-secondary overflow-hidden">
                <div 
                  className="h-full transition-all duration-500 group-hover:w-full"
                  style={{ 
                    backgroundColor: project.color,
                    width: project.level === "LV.99" ? "99%" : 
                           project.level === "LV.90" ? "90%" :
                           project.level === "LV.85" ? "85%" : "72%"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
