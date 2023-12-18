import React from "react";

import classes from "./Page.module.css"

import NavBar from "../../components/NavBar/NavBar";


const Page = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className={classes.Content}>{children}</div>
        </>
    );
};

export default Page;
