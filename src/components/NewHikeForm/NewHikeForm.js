import React from "react";

import classes from "./NewHikeForm.module.css"

import FormInput from "../FormElements/FormInput/FormInput";

const NewHikeForm = () => {
    return (
        <form className={classes.Form}>
            <FormInput
                name="name"
                label="Nombre de la Excursión"
                type="text"
            />
            <div className={classes.Monte}>
                <FormInput
                    name="mountain"
                    label="Nombre del Monte"
                    type="text"
                />
                <FormInput
                    name="altitud"
                    label="Altitud"
                    type="number"
                />
            </div>
        </form>
    );
}

export default NewHikeForm;