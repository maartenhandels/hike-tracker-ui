import React from "react";
import classes from "./NavTitle.module.css"

const NavTitle = ({text}) => {
    return(
        <h1 className={classes.Title}>
            {text}
        </h1>
    );
}

export default NavTitle;