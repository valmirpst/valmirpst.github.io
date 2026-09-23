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
            Sou desenvolvedor de software full stack com mais de dois anos de experiência em aplicações web. Comecei
            como estagiário de frontend na <span className="text-foreground">Unimake Software</span> e hoje atuo como
            desenvolvedor júnior, criando interfaces responsivas, APIs REST e integrações com sistemas e bancos de dados
            relacionais.
          </p>
          <p>
            Participo do desenvolvimento de ponta a ponta, da análise de requisitos à implantação e ao suporte em
            produção, incluindo fluxos de CI/CD. Sou técnico em Informática para a Internet pela{" "}
            <span className="text-foreground">UTFPR</span>, curso Análise e Desenvolvimento de Sistemas e tenho inglês
            fluente.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
