import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";

const groups = [
  { title: "Interfaces", technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { title: "Backend e dados", technologies: ["Node.js", ".NET 8", "Python", "SQL", "PostgreSQL"] },
  { title: "Ferramentas", technologies: ["Git", "Figma"] },
];

const StackSection = () => (
  <motion.section
    id="stack"
    aria-labelledby="stack-title"
    className="section-spacing border-t border-border"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 id="stack-title" variants={fadeUp} className="section-title">
          Stack e tecnologias
        </motion.h2>
        <motion.div variants={fadeUp} className="section-rule" />
        <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-10">
          Tecnologias presentes no meu trabalho e nos projetos deste portfólio.
        </motion.p>
        <div className="border-t border-border">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="grid md:grid-cols-[minmax(12rem,1fr)_minmax(0,3fr)] gap-4 md:gap-8 py-6 sm:py-8 border-b border-border"
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{group.title}</h3>
              <ul className="flex flex-wrap gap-2" aria-label={`Tecnologias de ${group.title.toLowerCase()}`}>
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="inline-flex items-center rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default StackSection;
