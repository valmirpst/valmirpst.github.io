import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", ".NET 8", "Python", "SQL", "PostgreSQL", "Tailwind CSS", "Git", "Figma"];

const AboutSection = () => (
  <motion.section id="sobre" className="section-spacing relative overflow-hidden" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
    <div className="absolute inset-0 opacity-[0.018] pointer-events-none section-grid" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Sobre <span className="text-gradient">mim</span></motion.h2>
        <motion.div variants={fadeUp}><Separator className="w-16 bg-primary mb-12" /></motion.div>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div variants={fadeUp} className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
            <p>Técnico em Informática pela <span className="text-foreground font-normal">UTFPR</span>, com experiência em JavaScript, TypeScript, Python, React, Next.js, Node.js e .NET 8. Inglês avançado, alta performance e código limpo.</p>
            <p>Tenho interesse especial em <span className="text-foreground font-normal">Inteligência Artificial e DevOps</span>, usando automação e melhoria contínua para tornar processos mais eficientes.</p>
            <p>Atualmente sou <span className="text-foreground font-normal">Programador Júnior na Unimake Software</span>, desenvolvendo soluções robustas e escaláveis.</p>
          </motion.div>
          <motion.aside variants={fadeUp} className="md:col-span-2 glass-card p-7 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><span className="w-8 h-px bg-primary" />Stack técnico</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => <Badge key={skill} variant="secondary" className="font-mono text-[10px] px-3 py-1 bg-secondary/60 hover:bg-primary hover:text-primary-foreground transition-colors">{skill}</Badge>)}
            </div>
            <div className="mt-9 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-background/50 border border-white/5"><p className="text-3xl font-bold text-gradient">2+</p><p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Anos de experiência</p></div>
              <div className="p-4 rounded-xl bg-background/50 border border-white/5"><p className="text-3xl font-bold text-gradient">5+</p><p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Projetos</p></div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
