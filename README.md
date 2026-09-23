# Portfólio de Valmir Paiva Stachin

Portfólio pessoal de um desenvolvedor full stack. Reúne trajetória profissional, tecnologias, projetos, formação e formas de contato em uma página responsiva.

**Site:** [valmirpst.github.io](https://valmirpst.github.io/)

## Conteúdo

- **Sobre mim:** experiência profissional e formação.
- **Stack e tecnologias:** ferramentas e práticas organizadas por área.
- **Projetos em destaque:** descrições, tecnologias, demonstrações e repositórios disponíveis.
- **Formação e estudos:** linha do tempo com cursos e formações.
- **Contato:** links para LinkedIn, GitHub e email.

A navegação usa âncoras para percorrer as seções. A linha do tempo acompanha a rolagem e desativa esse movimento quando o sistema pede movimento reduzido.

## Tecnologias do projeto

- React e TypeScript
- Vite
- Tailwind CSS e componentes baseados em Radix UI
- Framer Motion
- React Router com `HashRouter` e `HashLink`
- Vitest e ESLint

## Executar localmente

Use Node.js 22 e npm. Na raiz do projeto:

```bash
npm ci
npm run dev
```

O servidor de desenvolvimento fica disponível em `http://localhost:8080/`.

## Principais comandos

| Comando              | Função                                   |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Inicia o servidor de desenvolvimento.    |
| `npm run build`      | Gera a versão de produção em `dist/`.    |
| `npm run preview`    | Abre localmente a versão gerada.         |
| `npm run lint`       | Executa o ESLint.                        |
| `npm test`           | Executa os testes com Vitest.            |
| `npm run test:watch` | Executa os testes em modo de observação. |

## Estrutura

| Caminho                        | Conteúdo                                 |
| ------------------------------ | ---------------------------------------- |
| `src/components/`              | Seções da página e cabeçalho.            |
| `src/components/ui/`           | Componentes de interface reutilizáveis.  |
| `src/pages/`                   | Página inicial e página 404.             |
| `src/lib/`                     | Utilitários e configurações de animação. |
| `public/`                      | Ícones, manifesto e arquivos públicos.   |
| `.github/workflows/deploy.yml` | Build e publicação no GitHub Pages.      |

Os textos e links principais ficam nos componentes de cada seção. As listas de projetos, tecnologias e formações estão em `ProjectsSection.tsx`, `StackSection.tsx` e `EducationSection.tsx`, respectivamente.

## Publicação

Um push na branch `main` aciona o workflow do GitHub Actions, que instala as dependências com `npm ci`, gera o build e publica `dist/` no GitHub Pages.
