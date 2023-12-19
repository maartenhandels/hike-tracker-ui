import React, {useState} from "react";

import classes from "./NewHikeForm.module.css"

import FormInput from "../FormElements/FormInput/FormInput";
import Button from "../Button/Button";
import CoordinateInput from "../FormElements/CoordinateInput/CoordinateInput";

const NewHikeForm = () => {

    const [hikeTitle, setHikeTitle] = useState("");
    const [mountainName, setMountainName] = useState("");
    const [height, setHeight] = useState(0);

    const submitForm = () => {
        console.log("Submit Form");
        console.log("Hike Title: " + hikeTitle);
        console.log("Mountain Name: " + mountainName);
        console.log("Height: " + height);
    }

    return (
        <div className={classes.Form}>
            <div className={classes.Fields}>
                <FormInput
                    name="hikeTitle"
                    label="Titulo de la Excursión"
                    type="text"
                    value={hikeTitle}
                    onChangeHandler={setHikeTitle}
                />
                <FormInput
                    name="mountain"
                    label="Nombre del Monte"
                    type="text"
                    value={mountainName}
                    onChangeHandler={setMountainName}
                />
                <FormInput
                    name="altitud"
                    label="Altitud"
                    type="number"
                    value={height}
                    onChangeHandler={setHeight}
                />
                <CoordinateInput label="Coordenadas"/>
            </div>
            <div>
                <Button className={classes.Button} onClick={submitForm}>Guardar</Button>
            </div>

        </div>
    );
}

export default NewHikeForm;
