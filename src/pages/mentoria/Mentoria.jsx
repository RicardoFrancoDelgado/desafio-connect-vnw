import Card from "../../components/card/card";
import styles from "./mentoria.module.scss";
import carreiraEmprego from "../../assets/images/mentoria-carreira-emprego.png";
import experiencia from "../../assets/images/compartilhe-experiencia.png";
import acompanhamento from "../../assets/images/acompanhamento.png";

export function Mentoria() {
  return (
    <section className={styles.donateContainer}>
      <h1>Mentoria</h1>

      <div className={styles.CardsDonate}>
        <Card
          image={carreiraEmprego}
          title="Mentoria de Carreira e Emprego"
          description="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
          btnTitle="Quero participar"
        />
        <div className={styles.divBar} />
        <Card
          image={experiencia}
          title="Compartilhe Experiência"
          description="Oriente jovens e profissionais iniciantes em sua área."
          btnTitle="Quero participar"
        />
        <div className={styles.divBar} />
        <Card
          image={acompanhamento}
          title="Acompanhamento"
          description="Participe como guia em jornadas de aprendizado e desenvolvimento."
          btnTitle="Quero participar"
        />
      </div>
    </section>
  );
}
