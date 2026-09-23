import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/valmirpaivastachin/";
const GITHUB_URL = "https://github.com/valmirpst";
const EMAIL = "valmirpaivacpm@gmail.com";

const ContactSection = () => (
  <motion.section
    id="contato"
    className="section-spacing border-t border-border"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="section-title">
          Vamos conversar
        </motion.h2>
        <motion.div variants={fadeUp} className="section-rule" />
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
        >
          Estou aberto a oportunidades, colaborações e projetos que pedem uma experiência bem resolvida.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-lg px-6 h-12">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-lg px-6 h-12 border-border hover:bg-secondary hover:text-foreground"
          >
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-lg px-6 h-12 border-border hover:bg-secondary hover:text-foreground"
          >
            <a href={`mailto:${EMAIL}`}>
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </motion.div>
      </div>
      <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Valmir Paiva Stachin</span>
        <span>Desenvolvido com excelência.</span>
      </footer>
    </div>
  </motion.section>
);

export default ContactSection;
