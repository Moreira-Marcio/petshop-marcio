import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Fale conosco",
  keywords: [
    "petshop",
    "animais",
    "cuidados",
    "caes",
    "gatos,banho e tosa, ração,veterinatio, fale conosco",
  ],
};

export default function Contato() {
  return (
    <section>
      <h2>
        <b>Fale conosco</b>
      </h2>

      <p>
        telefones: (11) 1234-5678 Loja Principal <br />
        (11) 98765-4321 Suporte ao Cliente <br />
        whatssap: (11) 91234-5678 Atendimento Rápido <br />
        e-mail: atendimento@seupetshop.com.br Dúvidas e Orçamentos
      </p>
    </section>
  );
}
