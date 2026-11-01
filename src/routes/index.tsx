import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import logoTopo from "@/assets/logo-topo.png.asset.json";
import logoRodape from "@/assets/logo-rodape.png.asset.json";
import fachada from "@/assets/fachada.jpg.asset.json";
import servUniformes from "@/assets/servico-uniformes.jpg.asset.json";
import servCouros from "@/assets/servico-couros.jpg.asset.json";
import servEpis from "@/assets/servico-epis.jpg.asset.json";
import servLuvas from "@/assets/servico-luvas.jpg.asset.json";
import equipe from "@/assets/equipe.jpg.asset.json";
import reuniao from "@/assets/reuniao.jpg.asset.json";
import material from "@/assets/reuniao-material.jpg.asset.json";

const IG = "https://www.instagram.com/lavanderia.santatereza/";
const LINKTREE = "https://linktr.ee/santaterezalavanderia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lavanderia Santa Tereza | Lavanderia Industrial em Betim - MG" },
      { name: "description", content: "Higienização de uniformes, EPIs, botas, couros e luvas em Betim - MG desde 2004. Peça seu orçamento." },
      { property: "og:title", content: "Lavanderia Santa Tereza | Lavanderia Industrial em Betim" },
      { property: "og:description", content: "Higienização de uniformes, EPIs, couros e luvas para empresas desde 2004." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "Uniformes", d: "Higienização e reparos de uniformes profissionais.", img: servUniformes.url },
  { t: "Couros", d: "Limpeza e restauração de peças em couro.", img: servCouros.url },
  { t: "EPIs e Botas", d: "Higienização segura de equipamentos de proteção.", img: servEpis.url },
  { t: "Luvas", d: "Nosso diferencial: luvas extremamente limpas e restauradas.", img: servLuvas.url },
];

const eco = [
  "Poço de captação de chuva com capacidade de 120 mil litros",
  "Energia limpa por parceria com fazenda solar",
  "Destinação correta de resíduos com empresa especializada",
  "Estação própria de tratamento de efluentes líquidos",
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" aria-label="Lavanderia Santa Tereza">
            <img src={logoTopo.url} alt="Logo Lavanderia Santa Tereza" className="h-14 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#servicos" className="hover:text-primary">Serviços</a>
            <a href="#ambiental" className="hover:text-primary">Meio ambiente</a>
            <a href="#instagram" className="hover:text-primary">Instagram</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href="tel:+553135919289" className="rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            (31) 3591-9289
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="Interior da lavanderia industrial" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Betim · MG · desde 2004</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-7xl">
            Mais que limpeza: performance e cuidado.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">
            Lavagem de uniformes e EPIs com tecnologia sustentável. Lavanderia industrial com soluções inteligentes para sua empresa.
          </p>
          <a href="#contato" className="mt-10 inline-block rounded bg-accent px-7 py-4 font-semibold text-accent-foreground">
            Solicitar orçamento
          </a>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <h2 className="text-4xl font-black md:text-5xl">Mais de 20 anos cuidando de quem trabalha.</h2>
          <p className="text-lg text-muted-foreground">
            Fundada em 2004, a Lavanderia Santa Tereza atua na higienização de uniformes e EPIs visando a sustentabilidade,
            a valorização do ser humano, excelência no atendimento, confiabilidade e honestidade. Estamos preparados
            estrutural e legalmente para atender grandes projetos.
          </p>
        </div>
        <img src={fachada.url} alt="Fachada da Lavanderia Santa Tereza em Betim" loading="lazy" className="mt-12 w-full rounded" />
        <div className="mt-16 grid gap-px overflow-hidden rounded border bg-border md:grid-cols-3">
          {[
            ["Missão", "Prestar um serviço de qualidade na higienização e locação de materiais, com foco no cliente e atitudes sustentáveis."],
            ["Visão", "Conquistar cada vez mais parceiros de mercado, com práticas sustentáveis."],
            ["Valores", "Honestidade, qualidade, sustentabilidade, confiabilidade, valorização do ser humano, consciência ambiental e excelência no atendimento."],
          ].map(([t, d]) => (
            <div key={t} className="bg-card p-8">
              <h3 className="mb-3 text-xl font-bold text-primary">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-black md:text-5xl">Nossos serviços</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.t} className="rounded border bg-card p-7">
                <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ambiental" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Responsabilidade ambiental e social</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Reduzimos impactos ambientais, minimizamos o consumo de recursos não renováveis e seguimos os padrões legais
              com acompanhamento da Foco Meio Ambiente Consultoria Ambiental. Também apoiamos a comunidade gerando
              empregos e ajudando entidades não governamentais.
            </p>
          </div>
          <ul className="space-y-4">
            {eco.map((e) => (
              <li key={e} className="flex gap-4 border-b pb-4 text-lg">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="instagram" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">@lavanderia.santatereza</p>
              <h2 className="mt-2 text-4xl font-black md:text-5xl">Nosso dia a dia</h2>
            </div>
            <a href={IG} target="_blank" rel="noopener noreferrer" className="rounded bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Seguir no Instagram
            </a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [equipe.url, "Equipe Lavanderia Santa Tereza"],
              [reuniao.url, "Reunião da equipe"],
              [material.url, "Treinamento da equipe"],
            ].map(([src, alt]) => (
              <a key={src} href={IG} target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded">
                <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </a>
            ))}
          </div>
          <div className="mt-10 rounded border bg-card p-8">
            <h3 className="text-2xl font-bold">Trabalhe conosco</h3>
            <p className="mt-2 text-muted-foreground">
              Envie seu currículo para o RH:{" "}
              <a href="mailto:curriculo@lavanderiasantatereza.com.br" className="font-semibold text-primary">curriculo@lavanderiasantatereza.com.br</a>
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Fale com a gente</h2>
            <p className="mt-4 opacity-80">Em caso de dúvidas ou orçamento, entre em contato.</p>
            <div className="mt-8 space-y-2 text-xl font-semibold">
              <a href="tel:+553135919289" className="block hover:text-accent">(31) 3591-9289</a>
              <a href="tel:+553135915452" className="block hover:text-accent">(31) 3591-5452</a>
              <a href="mailto:contato@lavanderiasantatereza.com.br" className="block break-all hover:text-accent">
                contato@lavanderiasantatereza.com.br
              </a>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="block hover:text-accent">Instagram @lavanderia.santatereza</a>
              <a href={LINKTREE} target="_blank" rel="noopener noreferrer" className="block hover:text-accent">Todos os nossos links</a>
            </div>
            <p className="mt-8 opacity-80">Avenida Dois, 225 – Distrito Industrial Bandeirinhas<br />CEP 32654-804 – Betim – MG</p>
          </div>
          <iframe
            title="Mapa"
            className="h-80 w-full rounded"
            loading="lazy"
            src="https://maps.google.com/maps?q=Avenida%20Dois%20225%20Bandeirinhas%20Betim%20MG&output=embed"
          />
        </div>
      </section>

      <footer className="bg-ink py-10 text-center text-sm text-ink-foreground">
        <img src={logoRodape.url} alt="Logo Lavanderia Santa Tereza" className="mx-auto h-24 w-auto" />
        <p className="mt-6 opacity-90">© {new Date().getFullYear()} Lavanderia Santa Tereza – Betim/MG</p>
      </footer>
    </div>
  );
}
