import React from "react";
import Button from "../components/Button/Button";
import Nav from "../components/Nav/Nav";
import Logo from "../components/Logo/Logo";
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
            <div className="header__register">
                <Button className="header__login default">Log In</Button>
                <Button className="header__signin transparent">Sign In</Button>
            </div>
        </header>
    )
}

export default Header;