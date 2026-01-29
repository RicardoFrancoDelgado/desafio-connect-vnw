import Card from "../../components/card/card";
import styles from "./doacao.module.scss";
import doacao from "../../assets/images/doacao-projeto.png";

export function Doacao() {
  return (
    <section className={styles.donateContainer}>
      <h1>Doação</h1>

      <div className={styles.CardsDonate}>
        <Card
          image={doacao}
          title="Instituto grande familia"
          description="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          btnTitle="Quero Doar"
        />
        <Card
          image={doacao}
          title="Instituto grande familia"
          description="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          btnTitle="Quero Doar"
        />
        <Card
          image={doacao}
          title="Instituto grande familia"
          description="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          btnTitle="Quero Doar"
        />
      </div>
    </section>
  );
}
