import { createFileRoute, redirect } from "@tanstack/react-router";

// Página antiga: agora os clientes ficam na página inicial.
export const Route = createFileRoute("/clientes")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "clientes", statusCode: 301 });
  },
});
