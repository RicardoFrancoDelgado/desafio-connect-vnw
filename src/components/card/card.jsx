import styles from "./card.module.scss";

export default function Card({ image, title, description, btnTitle }) {
  return (
    <article className={styles.cardContainer}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{btnTitle}</button>
    </article>
  );
}
