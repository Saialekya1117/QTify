import React from "react";
import style from "./Searcbar.module.css"
import {ReactComponent as Searchicon} from "../../assets/search-icon.svg"

export default function SearchBar(){
    return (
        <form className={style.container}>
            <input className={style.Searcbar} name="search" placeholder="Search a song of your choice" required ></input>
            <button className={style.searchButton}>
                <Searchicon />
            </button>
        </form>    
    )
}