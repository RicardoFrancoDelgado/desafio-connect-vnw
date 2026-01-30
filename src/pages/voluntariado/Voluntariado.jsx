import Card from "../../components/card/card";
import styles from "./voluntariado.module.scss";
import reciclagem from "../../assets/images/mutirao-reciclagem.png";
import tecnologia from "../../assets/images/aulas-tecnologia.png";
import esporte from "../../assets/images/esporte-inclusao.png";

export function Voluntariado() {
  return (
    <section className={styles.donateContainer}>
      <h1>Voluntariado</h1>

      <div className={styles.CardsDonate}>
        <Card
          image={reciclagem}
          title="Multirão de reciclagem"
          description="Coletar materiais recicláveis e orientar sobre descarte consciente."
          btnTitle="Quero participar"
        />
        <div className={styles.divBar} />
        <Card
          image={tecnologia}
          title="Aulas de Tecnologia"
          description="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
          btnTitle="Quero participar"
        />
        <div className={styles.divBar} />
        <Card
          image={esporte}
          title="Esporte e Inclusão"
          description="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
          btnTitle="Quero participar"
        />
      </div>
    </section>
  );
}
