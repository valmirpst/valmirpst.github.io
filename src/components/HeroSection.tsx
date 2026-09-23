import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/valmirpaivastachin/";
const GITHUB_URL = "https://github.com/valmirpst";

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center relative bg-background pt-32 pb-24 sm:pt-24">
    <motion.div className="container mx-auto px-4 relative" variants={stagger} initial="hidden" animate="visible">
      <div className="max-w-6xl mx-auto">
        <motion.p variants={fadeUp} className="text-base text-muted-foreground mb-3">
          Olá, eu sou
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[1.06] max-w-5xl"
        >
          Valmir Paiva Stachin
        </motion.h1>
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-medium mb-7 text-primary">
          Full Stack Developer
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-9 leading-relaxed"
        >
          Transformo necessidades complexas em produtos digitais claros, estáveis e agradáveis de usar. Trabalho com
          React, Next.js, TypeScript e .NET.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12 px-6 rounded-lg text-sm sm:text-base font-semibold">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Conectar no LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-12 px-6 rounded-lg text-sm sm:text-base border-border hover:bg-secondary hover:text-foreground"
          >
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
