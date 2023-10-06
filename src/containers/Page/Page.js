import React from "react";
import NavBar from "../../components/NavBar/NavBar";


const Page = ({ children }) => {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    );
};

export default Page;
