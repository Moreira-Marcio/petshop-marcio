import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

//configura tipo para este componente e neste tipo definimos a prop post relacionado a ela ao tipo post criado anteriormente
type ListaPostsProps = {
  posts: Post[];
};

//src/components/ListaPosts.tsx
export default function ListaPosts({ posts }: ListaPostsProps) {
  console.log(posts);
  return (
    <div className={estilos.posts}>
      <article>
        <h3>titulo post</h3>
        <p>subtitulo post</p>
      </article>
    </div>
  );
}
