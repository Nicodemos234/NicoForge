import { Mail, Flame } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-sm">
              © 2026 ForjaDoNico. Todos os direitos reservados.
            </span>
          </div>
          
          <a 
            href="mailto:contato@forjadonico.com.br"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">contato@forjadonico.com.br</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
