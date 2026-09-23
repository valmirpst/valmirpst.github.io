import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 bg-background">
      <div className="max-w-md text-center">
        <p className="text-primary font-semibold mb-3">Erro 404</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Página não encontrada</h1>
        <p className="mt-4 text-muted-foreground">O endereço pode ter mudado ou não existe.</p>
        <Link
          to="/"
          className="inline-flex mt-8 min-h-11 items-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
