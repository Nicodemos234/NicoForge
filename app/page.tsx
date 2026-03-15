import { HeroSection } from "@/components/hero-section"
import { LinksSection } from "@/components/links-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LinksSection />
      <ProjectsSection />
      <TechStackSection />
      <Footer />
    </main>
  )
}
