import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

interface Education {
  title: string;
  institution: string;
  period: string;
  status: "concluído" | "em andamento";
  highlight?: boolean;
}

const educationItems: Education[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Integrado",
    period: "2026 — presente",
    status: "em andamento",
    highlight: true,
  },
  {
    title: "Curso Técnico Integrado em Informática para a Internet",
    institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
    period: "2022 — 2025",
    status: "concluído",
    highlight: true,
  },
  { title: "Fundamentos do C#", institution: "Rocketseat", period: "2026", status: "concluído" },
  { title: "Lovable para Builders", institution: "Tera", period: "2026", status: "concluído" },
  { title: "Fundamentos do Next.js", institution: "Rocketseat", period: "2025", status: "concluído" },
  { title: "JavaScript & TypeScript Completo", institution: "Udemy", period: "2023", status: "concluído" },
];

const EducationSection = () => (
  <motion.section
    id="formacao"
    className="section-spacing border-t border-border"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="section-title">
          Formação e estudos
        </motion.h2>
        <motion.div variants={fadeUp} className="section-rule" />
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        {educationItems.map((item) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            className={`surface-card p-5 sm:p-6 flex gap-4 ${item.highlight ? "border-primary/30" : ""}`}
          >
            <div className="mt-0.5 h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              {item.status === "em andamento" ? (
                <BookOpen className="h-5 w-5 text-primary" />
              ) : (
                <GraduationCap className="h-5 w-5 text-primary/75" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-primary mb-2">{item.period}</p>
              <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{item.institution}</p>
              {item.status === "em andamento" && (
                <span className="inline-block text-xs text-primary mt-3">Em andamento</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default EducationSection;
