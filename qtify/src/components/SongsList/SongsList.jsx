import { useParams } from "react-router-dom";
import styles from "./SongsList.module.css";
export default function SongsList() {
  let { slug } = useParams();
  console.log("Slug ", slug);
  return (
    <div className={styles.text}>
      <h1>Slug-{slug}</h1>
      <h1>Yet to generate the songs list </h1>
    </div>
  );
}