import { IInputTextField } from "../../../interfaces/IInputTextField";
import "../../../styles/InputTextField.css";

export function InputTextField({label, onDataChanged} : IInputTextField)
{
    const onChangeHandler = (event: any) => {
        onDataChanged(event);
    }

    return (
        <div className="input-text-field">
            <div className="input-field-label">
                {label}
            </div>
            <input className="input-field" 
                onKeyUp={onChangeHandler}/> 
        </div>
    );
}
