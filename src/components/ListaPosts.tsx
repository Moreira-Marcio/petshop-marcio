import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";

//configura tipo para este componente e neste tipo definimos a prop post relacionado a ela ao tipo post criado anteriormente
type ListaPostsProps = {
  posts: Post[];
};

//src/components/ListaPosts.tsx
export default function ListaPosts({ posts }: ListaPostsProps) {
  return (
    <div className={estilos.posts}>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3>{post.titulo}</h3>
            <p>{post.subtitulo}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
