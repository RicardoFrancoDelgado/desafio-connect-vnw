import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
