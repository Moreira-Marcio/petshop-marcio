import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";

import { Post } from "@/types/Post";
import next from "next";
import { notFound } from "next/navigation";

// src/app/posts/[id]/page.tsx
type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

//a função abaixo precisa receber o id , executar o acesso a api usando este id e retornar post com os dados , o retorno da funcao deve ser uma promise, nao se esque de chamar essa nova funcao do generateMetadata e do DetalhePost no lugar do codigo que voce ira remover

export async function buscarPostPorId(id: string): Promise<Post> {
  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (resposta.status === 404) {
    //buscar page not-found.tsx automaticamente em caso de erro 404
    notFound();
  }

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();
  return post;
}

export async function generateMetadata({ params }: DetalhePostProps) {
  const { id } = await params;
  const post = await buscarPostPorId(id);

  return {
    title: post.titulo + "| PetShop",
    description: post.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;
  const post = await buscarPostPorId(id);

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
