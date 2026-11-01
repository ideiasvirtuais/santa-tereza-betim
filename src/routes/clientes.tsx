import { createFileRoute, Link } from "@tanstack/react-router";
import logoTopo from "@/assets/logo-topo.png.asset.json";
import logoRodape from "@/assets/logo-rodape.png.asset.json";
import fpt from "@/assets/cliente-fpt.png.asset.json";
import magna from "@/assets/cliente-magna.png.asset.json";
import manserv from "@/assets/cliente-manserv.png.asset.json";
import mercadolivre from "@/assets/cliente-mercado-livre.png.asset.json";
import petrobras from "@/assets/cliente-petrobras.png.asset.json";
import stellantis from "@/assets/cliente-stellantis.png.asset.json";
import vale from "@/assets/cliente-vale.png.asset.json";

const IG = "https://www.instagram.com/lavanderia.santatereza/";
const LINKTREE = "https://linktr.ee/santaterezalavanderia";

const clients = [
  { name: "FPT", img: fpt.url },
  { name: "Magna", img: magna.url },
  { name: "Manserv", img: manserv.url },
  { name: "Mercado Livre", img: mercadolivre.url },
  { name: "Petrobras", img: petrobras.url },
  { name: "Stellantis", img: stellantis.url },
  { name: "Vale", img: vale.url },
];

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Alguns de nossos clientes | Lavanderia Santa Tereza" },
      { name: "description", content: "Empresas que confiam na higienização de uniformes, EPIs, couros e luvas da Lavanderia Santa Tereza em Betim - MG." },
      { property: "og:title", content: "Alguns de nossos clientes | Lavanderia Santa Tereza" },
      { property: "og:description", content: "Empresas que confiam na higienização de uniformes e EPIs da Lavanderia Santa Tereza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Clientes,
});

function Clientes() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" aria-label="Lavanderia Santa Tereza">
            <img src={logoTopo.url} alt="Logo Lavanderia Santa Tereza" className="h-14 w-auto" />
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="/#sobre" className="hover:text-primary">Sobre</a>
            <a href="/#servicos" className="hover:text-primary">Serviços</a>
            <Link to="/clientes" className="text-primary">Clientes</Link>
            <a href="/#ambiental" className="hover:text-primary">Meio ambiente</a>
            <a href="/#instagram" className="hover:text-primary">Instagram</a>
            <a href="/#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href="tel:+553135919289" className="rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            (31) 3591-9289
          </a>
        </div>
      </header>

      <section className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Quem confia na gente</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-6xl">
            Alguns de nossos clientes
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-85">
            Empresas que confiam a higienização de uniformes, EPIs, couros e luvas à Lavanderia Santa Tereza.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => (
            <div key={c.name} className="flex h-44 items-center justify-center rounded border bg-card p-8">
              <img src={c.img} alt={c.name} loading="lazy" className="max-h-24 w-auto max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-6">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Sua empresa pode ser a próxima</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Peça um orçamento para higienização de uniformes e EPIs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/#contato" className="rounded bg-primary px-7 py-4 font-semibold text-primary-foreground">
              Solicitar orçamento
            </a>
            <a href="/" className="rounded border border-input bg-background px-7 py-4 font-semibold">
              Voltar ao início
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-center text-sm text-ink-foreground">
        <img src={logoRodape.url} alt="Logo Lavanderia Santa Tereza" className="mx-auto h-24 w-auto" />
        <p className="mt-6 opacity-90">© {new Date().getFullYear()} Lavanderia Santa Tereza – Betim/MG</p>
        <p className="mt-2 opacity-90">
          <a href={IG} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram</a>
          {" · "}
          <a href={LINKTREE} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Todos os nossos links</a>
        </p>
      </footer>
    </div>
  );
}
