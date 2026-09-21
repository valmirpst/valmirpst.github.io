import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/valmirpaivastachin/";
const GITHUB_URL = "https://github.com/valmirpst";

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-background">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-[0.035] section-grid" />
      <div className="absolute -right-28 top-1/4 h-[480px] w-[480px] rounded-full gradient-orb opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
    </div>

    <motion.div className="container mx-auto px-4 relative z-10" variants={stagger} initial="hidden" animate="visible">
      <div className="max-w-4xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Disponível para novos projetos
        </motion.div>
        <motion.p variants={fadeUp} className="font-mono text-sm text-primary/80 mb-4 tracking-wider uppercase">Olá, eu sou</motion.p>
        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-[1.1]">
          Valmir Paiva <span className="text-gradient">Stachin</span>
        </motion.h1>
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-muted-foreground">
          Full Stack Developer
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
          Transformo necessidades complexas em produtos digitais claros, estáveis e agradáveis de usar. Trabalho com React, Next.js, TypeScript e .NET.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="h-12 px-7 rounded-full text-base font-semibold shadow-[0_0_35px_-12px_rgba(245,158,11,0.45)]">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-5 w-5" />Conectar no LinkedIn</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="h-12 px-7 rounded-full text-base border-white/10 hover:bg-white/10 hover:text-white">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github className="mr-2 h-5 w-5" />Ver GitHub</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>

    <a href="#sobre" aria-label="Ir para a seção sobre" className="absolute bottom-9 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">
      <ChevronDown className="h-5 w-5" />
    </a>
  </section>
);

export default HeroSection;
