import React from "react";
import Logo from "../components/Logo/Logo";
import Social from "../components/Social/Social";
import Nav from "../components/Nav/Nav";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__column footer__column--small">
                <Logo logoPosition="footer" />
                <div className="footer__info">
                    <a className="footer__email" href="mailto:info@watchme.ua">info@watchme.ua</a>
                    <Social />
                </div>
            </div>
            <div className="footer__column footer__column--big">
                <div className="footer__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <Nav />
                <div className="footer__copyright">
                    © 2022 Copyright text
                </div>
            </div>
        </footer>
    )
}

export default Footer;