import { IInputTextField } from "../../../interfaces/IInputTextField";
import "../../../styles/InputTextField.css";
import { useState } from "react";

export function InputTextField({label, description, initialValue, onDataChanged} : IInputTextField)
{
    const [value, setValue] = useState(initialValue);

    const onChangeHandler = (event: any) => {
        onDataChanged(event.target.value);
        setValue(event.target.value);
    }

    return (
        <div className="input-text-field">
            <div className="input-field-label">
                {label}
            </div>
            <div className="input-field-description">
                {description}
            </div>
            <input className="input-field"
                onChange={onChangeHandler}
                value={value}/> 
        </div>
    );
}
