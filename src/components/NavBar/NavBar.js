import React from "react";

import classes from "./NavBar.module.css";

import NavBarItem from "./NavBarItem/NavBarItem";
import NavTitle from "./NavTitle/NavTitle";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  let navBarItems = ["Crear Excursión", "Crear Informe", "Explorar"]
  const icons = [faPlus, faFile, faMagnifyingGlassLocation];

  return (
      <nav className={classes.NavBar}>
          <NavTitle text="Memorias del Aitona"/>
          <div className={classes.Content}>
              {navBarItems.map((texto, index) => <NavBarItem text={texto} icon={icons[index]}/>)}
          </div>
      </nav>
  );
};

export default NavBar;