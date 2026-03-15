import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t-4 border-border bg-card relative">
      {/* Pixel decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
        <div className="w-3 h-3 bg-[#00ff88]" />
        <div className="w-3 h-3 bg-[#00ffff]" />
        <div className="w-3 h-3 bg-[#ff00ff]" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 font-[family-name:var(--font-pixel)] text-[8px] text-muted-foreground">
            <span className="text-[#00ff88]">{">>>"}</span>
            <span>2026 FORJADONICO</span>
            <span className="text-[#00ff88]">{"<<<"}</span>
          </div>
          
          <a 
            href="mailto:contato@forjadonico.com.br"
            className="flex items-center gap-3 group"
          >
            <Mail className="w-4 h-4 text-[#00ffff]" />
            <span className="font-[family-name:var(--font-retro)] text-xl text-muted-foreground group-hover:text-[#00ffff] transition-colors">
              contato@forjadonico.com.br
            </span>
          </a>
        </div>
        
        {/* Game over text */}
        <div className="mt-8 text-center">
          <p className="font-[family-name:var(--font-pixel)] text-[8px] text-muted-foreground">
            THANKS FOR PLAYING - INSERT COIN TO CONTINUE
          </p>
        </div>
      </div>
    </footer>
  )
}
