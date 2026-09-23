import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";

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
        <motion.div
          variants={fadeUp}
          className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg"
        >
          <p>
            Sou técnico em Informática para a Internet pela <span className="text-foreground">UTFPR</span> e trabalho no
            desenvolvimento de produtos digitais, da interface aos serviços que a sustentam.
          </p>
          <p>
            Atualmente sou <span className="text-foreground">Programador Júnior na Unimake Software</span>. Tenho
            interesse especial em Inteligência Artificial e DevOps, usando automação e melhoria contínua para tornar
            processos mais eficientes. Tenho inglês avançado.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
