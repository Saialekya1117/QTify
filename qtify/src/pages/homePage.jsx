import HeroSection from "../components/Hero/Hero";
import AlbumContainer from "../components/AlbumContainer/AlbumContainer";
import heroImg from "../assets/hero_headphones.png";

import TestSong from "../components/SongsSection/TestSongs";
import TabTesting from "../components/SongsSection/tabs";
// import { TabTesting } from "../components/tabsss";
import styles from "./homePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection
        textLine1={"100 Thousand Songs, ad-free"}
        textLine2={"Over thousands podcast episodes"}
        image={heroImg}
      />
      <AlbumContainer />
      <TabTesting />
    </div>
  );
}