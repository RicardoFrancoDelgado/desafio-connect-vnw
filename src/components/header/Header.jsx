import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../assets/images/heart-handle.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Logo da página com uma mão segurando um coração"
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/doacao" className={styles.navLink}>
          Doação
        </Link>
        <Link to="/voluntariado" className={styles.navLink}>
          Voluntariado
        </Link>
        <Link to="/mentoria" className={styles.navLink}>
          Mentoria
        </Link>
        <Link to="/eventosep" className={styles.navLink}>
          Eventos & Palestras
        </Link>
      </nav>

      <div>
        <Link>
          <img
            src="https://github.com/RicardoFrancoDelgado.png"
            alt=""
            className={styles.profileImage}
          />
        </Link>
      </div>
    </header>
  );
}
