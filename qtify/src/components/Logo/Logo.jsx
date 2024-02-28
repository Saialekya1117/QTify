import React from "react";
import LogoImage from "../../assets/logo.png"
import style from "./Logo.module.css"

export default function Logo (){
    return (
        <img src={LogoImage} alt="Qtify logo" width={67} className={style.logo}></img>
    )
}