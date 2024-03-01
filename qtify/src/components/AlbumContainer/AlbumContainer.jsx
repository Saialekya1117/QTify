import Albums from "../Albums/Albums";
import styles from "./AlbumContainer.module.css";
import TestSong from "../SongsSection/TestSongs";

export default function AlbumContainer() {
  return (
    <div className={styles.container}>
      <Albums name={"new"} />
      <Albums name={"top"} />
    </div>
  );
}