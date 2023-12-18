import React, {useState} from "react";
import FormInput from "../../FormElements/FormInput/FormInput";

const AddMountainFormBlock = () => {

    const [mountainName, setMountainName] = useState();

    return (
        <div>
            <FormInput
                name="mountain-name"
                label="Nombre del Monte"
                type="text"
                value={mountainName}
                onChangeHandler={setMountainName}
            />
            <FormInput
                name="mountain-altitud"
                label="Altitud del Monte"
                type="number"
                value={mountainName}
                placeholder={1200}
                onChangeHandler={setMountainName}
            />
        </div>

    )
}

export default AddMountainFormBlock;