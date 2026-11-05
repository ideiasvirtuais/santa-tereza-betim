import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import logoTopo from "@/assets/logo-topo.png";
import logoRodape from "@/assets/logo-rodape.png";
import fachada from "@/assets/fachada.jpg";
import caminhao from "@/assets/caminhao.png";
import servUniformes from "@/assets/servico-uniformes-2.jpg";
import servCouros from "@/assets/servico-couros-2.jpg";
import servEpis from "@/assets/servico-epis-2.jpg";
import servLuvas from "@/assets/servico-luvas-2.jpg";
import equipe from "@/assets/equipe.jpg";
import reuniao from "@/assets/reuniao.jpg";
import material from "@/assets/reuniao-material.jpg";
import fpt from "@/assets/cliente-fpt.png";
import magna from "@/assets/cliente-magna.png";
import manserv from "@/assets/cliente-manserv.png";
import mercadolivre from "@/assets/cliente-mercado-livre.png";
import petrobras from "@/assets/cliente-petrobras.png";
import stellantis from "@/assets/cliente-stellantis.png";
import vale from "@/assets/cliente-vale.png";

const clients = [
  { name: "FPT", img: fpt },
  { name: "Magna", img: magna },
  { name: "Manserv", img: manserv },
  { name: "Mercado Livre", img: mercadolivre },
  { name: "Petrobras", img: petrobras },
  { name: "Stellantis", img: stellantis },
  { name: "Vale", img: vale },
];

const IG = "https://www.instagram.com/lavanderia.santatereza/";
const LINKTREE = "https://linktr.ee/santaterezalavanderia";
const WHATSAPP =
  "https://wa.me/553135915452?text=Bem%20Vindo%20a%20Lavanderia%20Santa%20Tereza%2C%20j%C3%A1%20iremos%20atende-l%C3%B3.";

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
  { t: "Uniformes", d: "Higienização e reparos de uniformes profissionais.", img: servUniformes },
  { t: "Couros", d: "Limpeza e restauração de peças em couro.", img: servCouros },
  { t: "EPIs e Botas", d: "Higienização segura de equipamentos de proteção.", img: servEpis },
  { t: "Luvas", d: "Nosso diferencial: luvas extremamente limpas e restauradas.", img: servLuvas },
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
            <img src={logoTopo} alt="Logo Lavanderia Santa Tereza" className="h-14 w-auto" />
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#servicos" className="hover:text-primary">Serviços</a>
            <a href="#clientes" className="hover:text-primary">Clientes</a>
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
        <div className="mt-12 grid items-center gap-8 md:grid-cols-[1.55fr_1fr]">
          <img src={fachada} alt="Fachada da Lavanderia Santa Tereza em Betim" loading="lazy" className="w-full rounded" />
          <img src={caminhao} alt="Caminhão da Lavanderia Santa Tereza" loading="lazy" className="mx-auto w-full max-w-md" />
        </div>
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
              <div key={s.t} className="overflow-hidden rounded border bg-card">
                <img src={s.img} alt={s.t} loading="lazy" className="w-full" />
                <div className="p-7">
                  <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                  <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Quem confia na gente</p>
        <h2 className="text-4xl font-black md:text-5xl">Alguns de nossos clientes</h2>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => (
            <div key={c.name} className="flex h-36 items-center justify-center rounded border bg-card p-6">
              <img src={c.img} alt={c.name} loading="lazy" className="max-h-20 w-auto max-w-full object-contain" />
            </div>
          ))}
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
              [equipe, "Equipe Lavanderia Santa Tereza"],
              [reuniao, "Reunião da equipe"],
              [material, "Treinamento da equipe"],
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
        <img src={logoRodape} alt="Logo Lavanderia Santa Tereza" className="mx-auto h-24 w-auto" />
        <p className="mt-6 opacity-90">© {new Date().getFullYear()} Lavanderia Santa Tereza – Betim/MG</p>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Lavanderia Santa Tereza"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition hover:scale-105 hover:bg-whatsapp-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark sm:right-8 sm:bottom-8"
      >
        <svg viewBox="0 0 448 512" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.8-38.1-3.4-5.5-.4-8.4 2.6-11.1 2.6-2.5 5.5-6.4 8.3-9.6 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30-17.1-41-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z" />
        </svg>
      </a>
    </div>
  );
}
