import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Gestão para Barbearias",
    description:
      "Gestão de estabelecimentos, serviços e agendamentos em uma experiência simples para proprietários e clientes.",
    tech: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma"],
    liveUrl: "https://barbearia-valmirpst.vercel.app",
    repoUrl: "https://github.com/valmirpst/barbearia",
  },
  {
    title: "Aplicativo de Gestão Financeira Pessoal",
    description: "Receitas, despesas, orçamentos e contas reunidos para dar visibilidade à saúde financeira.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://gestao-financeira-ai-one.vercel.app/preview",
    repoUrl: "https://github.com/valmirpst/gestao-financeira-ai",
  },
  {
    title: "Projeto Integrador — Livraria Online",
    description:
      "Projeto full stack com autenticação e gerenciamento de estoque desenvolvido na formação técnica da UTFPR.",
    tech: ["React", "Next.js", "Node.js", "Express", "PostgreSQL"],
    repoUrl: "https://github.com/valmirpst/projeto-integrador",
  },
  {
    title: "Portfólio pessoal",
    description: "Uma vitrine para apresentar projetos, repertório técnico e trajetória com foco no conteúdo.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/valmirpst/valmirpst.github.io",
  },
];

const ProjectsSection = () => (
  <motion.section
    id="projetos"
    className="section-spacing border-t border-border"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="section-title">
          Projetos em destaque
        </motion.h2>
        <motion.div variants={fadeUp} className="section-rule" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.article key={project.title} variants={fadeUp}>
            <Card className="project-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl leading-snug text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between gap-7">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-medium border-border text-muted-foreground bg-secondary/40"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button size="sm" asChild className="rounded-lg px-4">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Ver projeto
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="rounded-lg px-4 border-border hover:bg-secondary hover:text-foreground"
                    >
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Ver código
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ProjectsSection;
