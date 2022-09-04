import { IInputTextField } from "../../../interfaces/IInputTextField";
import "../../../styles/InputTextField.css";

export function InputTextField({label, description, onDataChanged} : IInputTextField)
{
    const onChangeHandler = (event: any) => {
        onDataChanged(event.target.value);
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
                onChange={onChangeHandler}/> 
        </div>
    );
}
