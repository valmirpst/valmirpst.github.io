import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project { title: string; description: string; tech: string[]; liveUrl?: string; repoUrl?: string; }

const projects: Project[] = [
  { title: "Sistema de Gestão para Barbearias", description: "Gestão de estabelecimentos, serviços e agendamentos em uma experiência simples para proprietários e clientes.", tech: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma"], liveUrl: "https://barbearia-valmirpst.vercel.app" },
  { title: "Aplicativo de Gestão Financeira Pessoal", description: "Receitas, despesas, orçamentos e contas reunidos para dar visibilidade à saúde financeira.", tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"], liveUrl: "https://gestao-financeira-ai-one.vercel.app/preview", repoUrl: "https://github.com/valmirpst/gestao-financeira-ai" },
  { title: "Projeto Integrador — Livraria Online", description: "Projeto full stack com autenticação e gerenciamento de estoque desenvolvido na formação técnica da UTFPR.", tech: ["React", "Next.js", "Node.js", "Express", "PostgreSQL"], repoUrl: "https://github.com/valmirpst/projeto-integrador" },
  { title: "Portfólio pessoal", description: "Uma vitrine para apresentar projetos, repertório técnico e trajetória com foco no conteúdo.", tech: ["React", "TypeScript", "Tailwind CSS"], repoUrl: "https://github.com/valmirpst/valmirpst.github.io" },
];

const ProjectsSection = () => (
  <motion.section id="projetos" className="section-spacing relative overflow-hidden" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
    <div className="absolute inset-0 opacity-[0.018] pointer-events-none section-grid" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-4xl mx-auto mb-12"><motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Projetos em <span className="text-gradient">destaque</span></motion.h2><motion.div variants={fadeUp}><Separator className="w-16 bg-primary" /></motion.div></div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => <motion.article key={project.title} variants={fadeUp}>
          <Card className="project-card h-full flex flex-col">
            <CardHeader><CardTitle className="text-xl leading-snug text-foreground">{project.title}</CardTitle><CardDescription className="text-muted-foreground leading-relaxed text-base font-light mt-3">{project.description}</CardDescription></CardHeader>
            <CardContent className="h-full flex flex-col justify-between gap-7"><div className="flex flex-wrap gap-2">{project.tech.map((tech) => <Badge key={tech} variant="outline" className="text-[10px] font-mono border-white/10 text-muted-foreground bg-white/5">{tech}</Badge>)}</div>
              <div className="flex flex-wrap gap-3">{project.liveUrl && <Button size="sm" asChild className="rounded-full px-5"><a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink className="mr-1.5 h-3.5 w-3.5" />Demo</a></Button>}{project.repoUrl && <Button size="sm" variant="outline" asChild className="rounded-full px-5 border-white/10 hover:bg-white/10"><a href={project.repoUrl} target="_blank" rel="noreferrer"><Github className="mr-1.5 h-3.5 w-3.5" />Código</a></Button>}</div>
            </CardContent>
          </Card>
        </motion.article>)}
      </div>
    </div>
  </motion.section>
);

export default ProjectsSection;
