import { useEffect } from "react";
import styles from "./styles.module.scss";
import notification from "../../assets/images/notification.png"; // você precisará adicionar um ícone de check

export function Notification({ onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.notification}>
      <img src={notification} alt="imagem de notificação" />
    </div>
  );
}
