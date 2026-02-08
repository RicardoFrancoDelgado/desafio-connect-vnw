import styles from "./styles.module.scss";
import pinIcon from "../../assets/icons/pin-icon.png";
import emailBoxIcon from "../../assets/icons/email-icon.png";
import calendarIcon from "../../assets/icons/calendar-icon.png";

export function Usuario() {
  return (
    <section className={styles.container}>
      <div className={styles.containerImage}>
        <img
          src="https://github.com/RicardoFrancoDelgado.png"
          alt="Foto de perfil do contribuínte"
        />
      </div>

      <article className={styles.containerText}>
        <div className={styles.containerTextHeading}>
          <h3>Ricardo Franco Delgado</h3>
          <p>Voluntário Ativo</p>
        </div>

        <div className={styles.content}>
          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <p className={styles.contentInfo}>
            {" "}
            <img src={pinIcon} alt="icone de um pin de mapa" /> Rio de Janeiro,
            RJ
          </p>
          <p className={styles.contentInfo}>
            {" "}
            <img src={emailBoxIcon} alt="icone de uma caixa de email" />{" "}
            ricardodelgado693@gmail.com
          </p>
          <p className={styles.contentInfo}>
            {" "}
            <img src={calendarIcon} alt="icone de calendário" /> Membro desde
            Novembro 2025
          </p>
        </div>

        <div className={styles.containerTags}>
          <p>Educação</p>
          <p>Meio Ambiente</p>
          <p>Assistência Social</p>
          <p>Design</p>
        </div>
      </article>
    </section>
  );
}
