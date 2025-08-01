// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
export default function Home() {
  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui você encontra as ulytimas noticias sobre pets</p>
      <ListaPosts />
    </section>
  );
}
