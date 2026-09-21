import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/valmirpaivastachin/";
const GITHUB_URL = "https://github.com/valmirpst";
const EMAIL = "valmirpaivacpm@gmail.com";

const ContactSection = () => (
  <motion.section id="contato" className="section-spacing relative overflow-hidden" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
    <div className="absolute inset-0 opacity-[0.018] pointer-events-none section-grid" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Vamos <span className="text-gradient">conversar</span></motion.h2>
        <motion.div variants={fadeUp}><Separator className="w-16 bg-primary mb-10 mx-auto" /></motion.div>
        <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">Estou aberto a oportunidades, colaborações e projetos que pedem uma experiência bem resolvida.</motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-7 h-12"><a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-5 w-5" />LinkedIn</a></Button>
          <Button variant="outline" asChild size="lg" className="rounded-full px-7 h-12 border-white/10 hover:bg-white/10"><a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github className="mr-2 h-5 w-5" />GitHub</a></Button>
          <Button variant="outline" asChild size="lg" className="rounded-full px-7 h-12 border-white/10 hover:bg-white/10"><a href={`mailto:${EMAIL}`}><Mail className="mr-2 h-5 w-5" />Email</a></Button>
        </motion.div>
      </div>
      <footer className="max-w-4xl mx-auto mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Valmir Paiva Stachin</span><span className="font-mono text-xs">Desenvolvido com foco em produto</span></footer>
    </div>
  </motion.section>
);

export default ContactSection;
