import { fadeUp, stagger } from "@/lib/animations";
import { motion, useInView, useReducedMotion, useScroll, type MotionValue } from "framer-motion";
import { useRef } from "react";

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
  { title: "Fundamentos do C#", institution: "Rocketseat", period: "2026", status: "concluído" },
  { title: "Lovable para Builders", institution: "Tera", period: "2026", status: "concluído" },
  {
    title: "Curso Técnico Integrado em Informática para a Internet",
    institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
    period: "2022 — 2025",
    status: "concluído",
    highlight: true,
  },
  { title: "Fundamentos do Next.js", institution: "Rocketseat", period: "2025", status: "concluído" },
  { title: "JavaScript & TypeScript Completo", institution: "Udemy", period: "2023", status: "concluído" },
];

const TimelineSegment = ({
  path,
  className,
  progress,
}: {
  path: string;
  className: string;
  progress: number | MotionValue<number>;
}) => (
  <svg
    className={`education-timeline-path ${className}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    focusable="false"
  >
    <path d={path} className="education-timeline-track" />
    <motion.path d={path} className="education-timeline-fill" style={{ pathLength: progress }} />
  </svg>
);

const TimelineItem = ({ item, index, isLast }: { item: Education; index: number; isLast: boolean }) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const isVisible = useInView(itemRef, { once: true, margin: "0px 0px -35% 0px" });
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: itemRef, offset: ["start 65%", "end 65%"] });
  const progress = reduceMotion ? 0 : scrollYProgress;
  const curve =
    index % 2 === 0 ? "M50 0 C50 25 82 25 82 50 C82 75 50 75 50 100" : "M50 0 C50 25 18 25 18 50 C18 75 50 75 50 100";

  return (
    <li
      ref={itemRef}
      className={`education-timeline-item ${index % 2 === 0 ? "education-timeline-item-left" : "education-timeline-item-right"} ${isVisible ? "is-active" : ""}`}
    >
      <div className="education-timeline-content">
        <p className="education-timeline-date mb-2">{item.period}</p>
        <h3 className="text-lg sm:text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">{item.institution}</p>
        {item.status === "em andamento" && (
          <span className="inline-block text-xs font-medium text-primary mt-3">Em andamento</span>
        )}
      </div>
      <span className="education-timeline-marker" aria-hidden="true">
        {!isLast && (
          <>
            <TimelineSegment path="M50 0 L50 100" className="education-timeline-path-mobile" progress={progress} />
            <TimelineSegment path={curve} className="education-timeline-path-desktop" progress={progress} />
          </>
        )}
        <span
          className={
            item.highlight ? "education-timeline-dot education-timeline-dot-highlight" : "education-timeline-dot"
          }
        />
      </span>
    </li>
  );
};

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
        <ol
          className="education-timeline max-w-5xl mx-auto"
          aria-label="Formação e cursos em ordem cronológica, dos mais recentes aos mais antigos"
        >
          {educationItems.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} isLast={index === educationItems.length - 1} />
          ))}
        </ol>
      </div>
    </div>
  </motion.section>
);

export default EducationSection;
