import { Badge } from "@/components/ui/badge";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  ".NET 8",
  "Python",
  "SQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "Figma",
];

const AboutSection = () => (
  <motion.section
    id="sobre"
    className="section-spacing border-t border-border"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="section-title">
          Sobre mim
        </motion.h2>
        <motion.div variants={fadeUp} className="section-rule" />
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg max-w-2xl"
          >
            <p>
              Técnico em Informática pela <span className="text-foreground font-normal">UTFPR</span>, com experiência em
              JavaScript, TypeScript, Python, React, Next.js, Node.js e .NET 8. Inglês avançado, alta performance e
              código limpo.
            </p>
            <p>
              Tenho interesse especial em{" "}
              <span className="text-foreground font-normal">Inteligência Artificial e DevOps</span>, usando automação e
              melhoria contínua para tornar processos mais eficientes.
            </p>
            <p>
              Atualmente sou <span className="text-foreground font-normal">Programador Júnior na Unimake Software</span>
              , desenvolvendo soluções robustas e escaláveis.
            </p>
          </motion.div>
          <motion.aside variants={fadeUp} className="md:col-span-2 surface-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold mb-5">Stack técnico</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mt-7 pt-6 border-t border-border grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold text-primary">2+</p>
                <p className="text-xs text-muted-foreground mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground mt-1">Projetos</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
