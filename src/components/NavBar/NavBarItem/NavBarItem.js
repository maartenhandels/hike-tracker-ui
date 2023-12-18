import React from "react";

import classes from "./NarBarItem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";



const NavBarItem = ({ path, text = "", icon, active = false }) => {
  return(
      <div className="nav-item">
          <Link to={path} className={classes.Link}>
              <div className={`nav-link ${active ? "active" : ""} ${classes.Content}`} aria-current="page">
                  <FontAwesomeIcon icon={icon} />
                  <div>{text}</div>
              </div>
          </Link>
      </div>
  );
}

export default NavBarItem;
