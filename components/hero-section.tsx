"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Flame } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Forge glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flame className="w-10 h-10 text-primary animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            ForjaDoNico
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-primary font-mono mb-6">
          Dev & Criadora de Conteúdo
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Transformando ideias em realidade através de código, hardware e criatividade. 
          Do terminal à bancada, da impressora 3D ao streaming.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToProjects}
          className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
        >
          Ver Projetos
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
