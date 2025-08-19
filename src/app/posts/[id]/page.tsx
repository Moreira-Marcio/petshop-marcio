import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";

import { Post } from "@/types/Post";
import next from "next";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

// src/app/posts/[id]/page.tsx
type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

//a função abaixo precisa receber o id , executar o acesso a api usando este id e retornar post com os dados , o retorno da funcao deve ser uma promise, nao se esque de chamar essa nova funcao do generateMetadata e do DetalhePost no lugar do codigo que voce ira remover

export async function buscarPostPorId(id: string): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single<Post>();
  // esse codigo PGRST116 é um codigo interno da API Postgre usado pelo supabase na pratica, indica que o quary single não retorna nenhum item, ou seja, zero resultados ele disoara um codigo e com isso chamamos a funçãoi not found (que ppor sua vez chamamos )
  if (error?.code === "PGRST116") {
    notFound();
  }

  if (error) {
    throw new Error("Erro ao buscar post: " + error.message);
  }

  const post: Post = data;
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
