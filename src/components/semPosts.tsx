//src/components/semPosts.tsx
import Container from "./Container";
import estilos from "../styles/semPosts.module.css";

export default function SemPosts() {
  return (
    <Container>
      <p className={estilos.semPosts}>
        Nenhum post encontrado! Tente novamentemais tarde       
      </p>
    </Container>
  );
}