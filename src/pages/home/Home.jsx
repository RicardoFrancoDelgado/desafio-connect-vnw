import arrow from "../../assets/icons/arrow-icon.png";
import primary from "../../assets/images/image-primary.png";
import { Footer } from "../../components/footer/Footer";
import styles from "./home.module.scss";

export function Home() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.textContent}>
          <h1>Projetos Sociais que transformam</h1>
          <p>
            Conectamos sua empres com projetos sociais impactantes. Juntos,
            criamos mudanças reais na comunidade
          </p>

          <div>
            <a href="" className={styles.cadastrarEmpresa}>
              Cadastrar Empresa <img src={arrow} alt="Icone de uma seta" />
            </a>
          </div>

          <section className={styles.cardSection}>
            <div className={styles.cards}>
              <h2>500+</h2>
              <p>Empresas Voluntárias</p>
            </div>

            <div className={styles.cards}>
              <h2>1.2K+</h2>
              <p>Projetos Realizados</p>
            </div>

            <div className={styles.cards}>
              <h2>50K+</h2>
              <p>Vidas Impactadas</p>
            </div>
          </section>
        </div>

        <div>
          <img
            src={primary}
            alt="Imagem de duas mãos segurando bonecos de papel e um globo terrestre"
            className={styles.primaryImage}
          />
        </div>
      </section>
    </>
  );
}
