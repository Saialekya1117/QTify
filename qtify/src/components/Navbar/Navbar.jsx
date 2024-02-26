import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../Searchbar/SearchBar"

function Navbar(){
    return (
        <nav className={styles.Navbar}>
            <Logo />
            <SearchBar />
            <Button />
        </nav>
    )
}

export default Navbar;