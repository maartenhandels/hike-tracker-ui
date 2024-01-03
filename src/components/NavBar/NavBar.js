import React from "react";

import classes from "./NavBar.module.css";

import NavBarItem from "./NavBarItem/NavBarItem";
import NavTitle from "./NavTitle/NavTitle";
import {
  faHome,
  faMagnifyingGlassLocation,
  faPhotoFilm,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const NavBar = () => {

  const navBarItems = ["Home", "Crear Excursión", "Mis excursiones",
    "Mi Mapa"]
  const icons = [faHome, faPlus, faPhotoFilm, faMagnifyingGlassLocation];
  const paths = ["/", "/nuevo", "/mis-excursiones", "/mis-mapa"]

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
