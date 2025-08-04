import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";

import { Post } from "@/types/Post";
import next from "next";

// src/app/posts/[id]/page.tsx
type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;

  const resultado = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resultado.ok) {
    throw new Error("Erro ao buscar os posts: " + resultado.statusText);
  }

  const post: Post = await resultado.json();

  //console.log(resultado);

  return (
    <article className={estilos.conteudo}>
      <h2>{post.titulo}</h2>
      <Container>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Container>
    </article>
  );
}
