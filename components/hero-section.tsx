"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "DEV & CRIADOR";

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden scanlines">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating pixels decoration */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-[#00ffff] animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-[#ff00ff] animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-5 h-5 bg-[#00ff88] animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-4 h-4 bg-[#ffff00] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Score display */}
        <div className="mb-8 font-[family-name:var(--font-pixel)] text-xs text-[#00ffff]">
          <span className="mr-8">SCORE: 999999</span>
          <span>HI-SCORE: 999999</span>
        </div>

        {/* Main title with pixel styling */}
        <div className="mb-6">
          <h1 className="font-[family-name:var(--font-pixel)] text-3xl md:text-5xl lg:text-6xl text-[#00ff88] crt-glow tracking-wider leading-relaxed">
            FORJA DO NICO
          </h1>
        </div>

        {/* Subtitle with typewriter effect */}
        <div className="h-12 mb-8">
          <p className="font-[family-name:var(--font-pixel)] text-sm md:text-base text-[#ff00ff]">
            {"> "}
            {typedText}
            <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
          </p>
        </div>

        {/* Description */}
        <p className="font-[family-name:var(--font-retro)] text-2xl md:text-3xl text-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformando ideias em realidade atraves de codigo, hardware e
          criatividade. Do terminal a bancada, da impressora 3D ao streaming.
        </p>

        {/* CTA Button - Arcade style */}
        <button
          onClick={scrollToProjects}
          className="group relative font-[family-name:var(--font-pixel)] text-xs md:text-sm bg-[#00ff88] text-[#0a0a12] px-8 py-4 border-4 border-[#00ff88] hover:bg-transparent hover:text-[#00ff88] transition-all duration-200 pixel-border hover-glitch"
        >
          <span className="relative z-10">
            {">"} START GAME {"<"}
          </span>
        </button>

        {/* Insert coin text */}
        <p className="mt-8 font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground animate-blink">
          PRESS START TO CONTINUE
        </p>
      </div>
    </section>
  );
}
