import styles from "./styles.module.scss";
import doacao from "../../assets/images/doacao-projeto.png";
import livros from "../../assets/images/doe-livros.png";
import computador from "../../assets/images/doe-computador.png";
import Card from "../../components/card";
import { useState } from "react";

export function Doacao() {
  const [showNotification, setShowNotification] = useState(false);

  const handleParticipate = () => {
    setShowNotification(true);
  };
  return (
    <section className={styles.donateContainer}>
      {showNotification && (
        <Notification
          message="Inscrito com sucesso!"
          onClose={() => setShowNotification(false)}
        />
      )}
      <h1>Doação</h1>

      <div className={styles.CardsDonate}>
        <Card
          image={doacao}
          title="Instituto grande familia"
          description="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          btnTitle="Quero Doar"
          onClick={handleParticipate}
        />
        <div className={styles.divBar} />
        <Card
          image={livros}
          title="Projeto Futuro na Escolafamilia"
          description="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura"
          btnTitle="Quero Doar"
          onClick={handleParticipate}
        />
        <div className={styles.divBar} />
        <Card
          image={computador}
          title="Instituto Conecta Jovem"
          description="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades"
          btnTitle="Quero Doar"
          onClick={handleParticipate}
        />
      </div>
    </section>
  );
}
