import React from "react";

import classes from "./NarBarItem.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";

const NavBarItem = ({path, text = "", icon, active = false}) => {
  return (
      <div className="nav-item">
        <NavLink to={path} className={({isActive}) =>
            isActive ? classes.ActiveLink : classes.Link}>
          <div className={classes.Content}>
            <FontAwesomeIcon icon={icon}/>
            <div>{text}</div>
          </div>
        </NavLink>
      </div>
  );
}

export default NavBarItem;
