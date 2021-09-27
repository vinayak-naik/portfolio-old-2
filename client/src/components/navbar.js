import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
    const history = useHistory();
    const navItems = [
      { name: "Home", path: "" },
      { name: "About", path: "about" },
      { name: "Skills", path: "skills" },
      { name: "Projects", path: "projects" },
      { name: "Contact", path: "contact" },
    ];
    return (
        <div className={style.container}>
            
            {navItems.map((nav) => (
          <div
            key={nav.path}
            onClick={() =>
              props.active !== nav.path && history.replace(`/${nav.path}`)
            }
            className={clsx(
                style.navItem,
              props.active === nav.path && style.activeNav
            )}
          >
            {nav.name}
          </div>
        ))}
            
        </div>
    )
}

export default Navbar
