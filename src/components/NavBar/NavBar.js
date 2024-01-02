import React from "react";

import classes from "./NavBar.module.css";

import NavBarItem from "./NavBarItem/NavBarItem";
import NavTitle from "./NavTitle/NavTitle";
import {
  faFile,
  faHome,
  faMagnifyingGlassLocation,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const NavBar = () => {

  const navBarItems = ["Home", "Crear Excursión", "Crear Informe",
    "Mis Excursiones"]
  const icons = [faHome, faPlus, faFile, faMagnifyingGlassLocation];
  const paths = ["/", "/nuevo", "/informes", "/mis-excursiones"]

  return (
      <nav className={classes.NavBar}>
        <Link to={paths[0]} className={classes.Link}>
          <NavTitle text="Memorias del Aitona"/>
        </Link>

        <div className={classes.Content}>
          {navBarItems.map((texto, index) => (
              <NavBarItem
                  key={index}
                  path={paths[index]}
                  text={texto}
                  icon={icons[index]}
              />
          ))}
        </div>
      </nav>
  );
};

export default NavBar;
