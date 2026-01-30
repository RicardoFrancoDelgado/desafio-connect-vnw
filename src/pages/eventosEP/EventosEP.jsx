import Card from "../../components/card/card";
import styles from "./eventosep.module.scss";
import emponderando from "../../assets/images/empoderando-jovens-futuro.png";
import transforma from "../../assets/images/tecnologia-que-transforma.png";
import carreira from "../../assets/images/carreira-primeiro-emprego.png";

export function EventoEP() {
  return (
    <section className={styles.donateContainer}>
      <h1>Eventos e Palestras</h1>

      <div className={styles.CardsDonate}>
        <Card
          image={emponderando}
          title="Emponderando Jovens para o Futuro"
          description="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
          subdescription="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
          btnTitle="Quero participar"
        />
        <div className={styles.divBar} />
        <Card
          image={transforma}
          title="Tecnologia que Transforma"
          description="Atividade: Workshop de introdução à programação e inovação digital."
          subdescription="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
          btnTitle="Quero participar"
        />
        <div className={styles.divBar} />
        <Card
          image={carreira}
          title="Carreira e Primeiro Emprego"
          description="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
          subdescription="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
          btnTitle="Quero participar"
        />
      </div>
    </section>
  );
}
