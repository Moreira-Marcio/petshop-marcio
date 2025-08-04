// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import arrayPosts from "@/data/array-posts";
import { Post } from "@/types/Post";

export default async function Home() {
  //revalidamos o cache do next a cada requisição para garantir que os dados estejam sempre atualizados
  const resposta = await fetch(`http://localhost:2112/posts`, {
    next: { revalidate: 0 },
  });
  if (!resposta.ok) {
    throw new Error("Erro ao buscar os posts: " + resposta.statusText);
  }

  const posts: Post[] = await resposta.json();

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui você encontra as ultimas noticias sobre pets</p>
      <ListaPosts posts={posts} />
    </section>
  );
}
