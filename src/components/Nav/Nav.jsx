import React from "react";
import NavLink from "./NavLink";
import './Nav.scss'

const Nav = () => {
    const navList = [
        {
            name: 'Main',
            link: '#'
        }, {
            name: 'Movies',
            link: '#'
        }, {
            name: 'Series',
            link: '#'
        }, {
            name: 'Repo',
            link: 'https://github.com/baloo1687'
        },
    ];
    
    return (
        <nav className="nav">
            {navList.map(navItem => {
                return <NavLink key={navItem.name} link={navItem.link}>{navItem.name}</NavLink>
            })}
        </nav>
    )
}

export default Nav;