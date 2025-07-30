import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | PetShop",
  description: "Conheça nossos Produtos",
  keywords: [
    "petshop",
    "animais",
    "cuidados",
    "caes",
    "gatos,banho e tosa, ração,veterinatio",
  ],
};

export default function Produtos() {
  return (
    <section>
      <h2>
        <b>Conheça nossos Produtos</b>
      </h2>

      <p>
        Ração premium para cães e gatos Brinquedos interativos para pets
        Shampoos e produtos de higiene <br />
        Serviços: Banho e tosa profissional, Consulta veterinária, Vacinação e
        vermifugação
      </p>
    </section>
  );
}
