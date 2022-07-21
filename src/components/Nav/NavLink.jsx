import React from "react";

const NavLink = (props) => {
    return (
        <a href={props.link} className="nav__link">{props.children}</a>
    )
}

export default NavLink;