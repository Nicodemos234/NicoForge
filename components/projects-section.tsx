"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Keyboard, Cpu, Printer, Network } from "lucide-react"

const projects = [
  {
    title: "NicoDeck",
    description: "Macropad customizado com display LCD e integração com OBS. Controle total sobre suas lives e workflows.",
    tags: ["TypeScript", "React", "Hardware"],
    icon: Cpu,
  },
  {
    title: "Teclado Split Customizado",
    description: "Teclado ergonômico split com layout ortolinear, firmwarecustom QMK e case impressa em 3D.",
    tags: ["Eletrônica", "DIY", "Firmware"],
    icon: Keyboard,
  },
  {
    title: "Setup de Impressão 3D",
    description: "Ender 3 totalmente modificada com Direct Drive, Klipper e sistema de troca rápida de toolhead.",
    tags: ["Ender 3", "Modding", "Maker"],
    icon: Printer,
  },
  {
    title: "Automação e Redes",
    description: "Homelab com servidores Debian, Docker containers, automações em scripts e monitoramento.",
    tags: ["Debian", "Infra", "Scripts"],
    icon: Network,
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Projetos
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
          Uma coleção de criações que misturam hardware, software e muita criatividade
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
