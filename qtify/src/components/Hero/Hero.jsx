import React from "react";
import HeroImage from "../../assets/hero_headphones.png"
import styles from "./Hero.module.css"

export default function Hero(){
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            
            <img className={styles.heroImage} src={HeroImage} alt="hero Image"></img>
        </div>
    )

}