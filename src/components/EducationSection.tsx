import { Separator } from "@/components/ui/separator";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

interface Education { title: string; institution: string; period: string; status: "concluído" | "em andamento"; highlight?: boolean; }

const educationItems: Education[] = [
  { title: "Análise e Desenvolvimento de Sistemas", institution: "Centro Universitário Integrado", period: "2026 — presente", status: "em andamento", highlight: true },
  { title: "Curso Técnico Integrado em Informática para a Internet", institution: "Universidade Tecnológica Federal do Paraná (UTFPR)", period: "2022 — 2025", status: "concluído", highlight: true },
  { title: "Fundamentos do C#", institution: "Rocketseat", period: "2026", status: "concluído" },
  { title: "Lovable para Builders", institution: "Tera", period: "2026", status: "concluído" },
  { title: "Fundamentos do Next.js", institution: "Rocketseat", period: "2025", status: "concluído" },
  { title: "JavaScript & TypeScript Completo", institution: "Udemy", period: "2023", status: "concluído" },
];

const EducationSection = () => (
  <motion.section id="formacao" className="section-spacing relative overflow-hidden" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
    <div className="container mx-auto px-4 relative">
      <div className="max-w-4xl mx-auto mb-12"><motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Formação & <span className="text-gradient">estudos</span></motion.h2><motion.div variants={fadeUp}><Separator className="w-16 bg-primary" /></motion.div></div>
      <div className="max-w-3xl mx-auto space-y-4">
        {educationItems.map((item) => <motion.article key={item.title} variants={fadeUp} className={`glass-card rounded-xl p-5 md:p-6 flex gap-4 ${item.highlight ? "border-primary/25" : ""}`}>
          <div className="mt-0.5 h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">{item.status === "em andamento" ? <BookOpen className="h-5 w-5 text-primary" /> : <GraduationCap className="h-5 w-5 text-primary/75" />}</div>
          <div className="min-w-0 flex-1"><p className="text-xs text-primary/80 font-mono tracking-wider uppercase mb-2">{item.period}</p><h3 className="text-lg font-bold">{item.title}</h3><p className="text-muted-foreground font-light mt-1">{item.institution}</p></div>
          {item.status === "em andamento" && <span className="hidden sm:block text-[10px] h-fit uppercase tracking-wider text-primary border border-primary/20 px-2 py-1 rounded-full">Em andamento</span>}
        </motion.article>)}
      </div>
    </div>
  </motion.section>
);

export default EducationSection;
