import styles from "./styles.module.scss";

export default function Card({
  image,
  title,
  description,
  subdescription,
  btnTitle,
  onClick,
}) {
  return (
    <article className={styles.cardContainer}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{subdescription || ""}</p>
      <button onClick={onClick}>{btnTitle}</button>
    </article>
  );
}
