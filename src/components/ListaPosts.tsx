import estilos from "./ListaPosts.module.css";

//src/components/ListaPosts.tsx
export default function ListaPosts() {
  return (
    <div className={estilos.posts}>
      <article>
        <h3>titulo post</h3>
        <p>subtitulo post</p>
      </article>
    </div>
  );
}
