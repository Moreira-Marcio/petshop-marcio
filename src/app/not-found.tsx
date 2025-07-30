import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina não encontrada |PetShop",
  robots: "noimdex",
};

export default function Pagina404() {
  return (
    <section>
      <h2>Ops!! Pagina não encontrada!!</h2>
    </section>
  );
}
