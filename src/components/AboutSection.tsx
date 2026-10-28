import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";

const AboutSection = () => (
  <motion.section
    id="sobre"
    className="section-spacing border-t border-border max-md:py-16"
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
        <motion.div variants={fadeUp} className="section-rule max-md:mb-6" />
        <motion.div variants={fadeUp} className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
          <img
            src={`${import.meta.env.BASE_URL}valmir.jpg`}
            alt="Foto de Valmir"
            className="h-32 w-32 shrink-0 self-center rounded-full border border-border object-cover md:h-44 md:w-44 md:self-auto"
            width={176}
            height={176}
          />
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg md:space-y-6">
            <p>
              Sou desenvolvedor de software full stack com mais de dois anos de experiência em aplicações web. Comecei
              como estagiário de frontend na <span className="text-foreground">Unimake Software</span> e hoje atuo como
              desenvolvedor júnior, criando interfaces responsivas, APIs REST e integrações com sistemas e bancos de
              dados relacionais.
            </p>
            <p>
              Participo do desenvolvimento de ponta a ponta, da análise de requisitos à implantação e ao suporte em
              produção, incluindo fluxos de CI/CD. Sou técnico em Informática para a Internet pela{" "}
              <span className="text-foreground">UTFPR</span>, curso Análise e Desenvolvimento de Sistemas e tenho inglês
              fluente.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
