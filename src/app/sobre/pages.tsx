import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Conheça nossa PetShop",
  keywords: ["petshop", "animais", "cuidados", "caes", "gatos,quem somos"],
};

export default function Sobre() {
  return (
    <section>
      <h2>
        <b>Conheça nossa PetShop</b>
      </h2>

      <p>
        Somos apaixonados por pets e dedicados a oferecer cuidado de qualidade e
        com carinho. No nosso petshop, seu animalzinho é tratado como parte da
        família. Com amor, experiência e responsabilidade, cuidamos do bem-estar
        do seu melhor amigo.
      </p>
    </section>
  );
}
