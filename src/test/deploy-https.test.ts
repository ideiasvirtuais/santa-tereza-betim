import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

// O .htaccess servido no ar é gerado dentro da automação de deploy, então a
// regra de HTTPS só existe se estiver no heredoc desse workflow.
function htaccessGeradoPeloWorkflow(): string {
  const workflow = readFileSync(
    fileURLToPath(new URL("../../.github/workflows/lovable-deploy.yml", import.meta.url)),
    "utf8",
  );
  const bloco = workflow.match(/<<'HTACCESS'\n([\s\S]*?)\n\s*HTACCESS/);
  if (!bloco) throw new Error("bloco de geracao do .htaccess nao encontrado no workflow");
  return bloco[1];
}

describe("Deploy: acesso HTTP virando HTTPS", () => {
  const htaccess = htaccessGeradoPeloWorkflow();

  it("redireciona http para https com 301 mantendo o endereco", () => {
    expect(htaccess).toContain("RewriteCond %{HTTPS} !=on");
    expect(htaccess).toContain(
      "RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]",
    );
  });

  it("nao redireciona de novo quando o acesso ja chega cifrado por proxy", () => {
    expect(htaccess).toContain("RewriteCond %{HTTP:X-Forwarded-Proto} !https");
  });

  it("aplica o HTTPS antes do fallback de rotas do SPA", () => {
    const inicioHttps = htaccess.indexOf("RewriteCond %{HTTPS} !=on");
    const inicioFallback = htaccess.indexOf("RewriteRule ^ _shell.html [L]");
    expect(inicioHttps).toBeGreaterThan(-1);
    expect(inicioFallback).toBeGreaterThan(-1);
    expect(inicioHttps).toBeLessThan(inicioFallback);
  });
});
