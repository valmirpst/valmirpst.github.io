import { HashLink } from "react-router-hash-link";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

const SiteHeader = () => (
  <header className="site-header">
    <div className="container mx-auto px-4 site-header-inner">
      <HashLink className="site-brand" to="/#hero" smooth aria-label="Valmir Paiva Stachin, voltar ao início">
        <img src="/logo.png" alt="" width="32" height="32" />
        <span>valmirpst</span>
      </HashLink>
      <nav aria-label="Navegação principal" className="site-nav">
        {links.map((link) => (
          <HashLink key={link.href} to={`/${link.href}`} smooth>
            {link.label}
          </HashLink>
        ))}
      </nav>
    </div>
  </header>
);

export default SiteHeader;
