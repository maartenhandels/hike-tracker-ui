import React from "react";

import classes from "./NarBarItem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const NavBarItem = ({ text = "", icon, active = false }) => {
  return(
      <div className="nav-item">
          <div className={`nav-link ${active ? "active" : ""} ${classes.Content}`} aria-current="page">
              <FontAwesomeIcon icon={icon} />
              <div>{text}</div>
          </div>
      </div>
  );
}

export default NavBarItem;