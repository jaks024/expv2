import { IInputTextField } from "../../../interfaces/IInputTextField";

export function InputTextField({label, onDataChanged} : IInputTextField)
{
    return (
        <div className="input-text-field">
            <div className="input-field-label">
                {label}
            </div>
            <input className="input-field" 
                onChange={event => onDataChanged(event.target.value)}/> 
        </div>
    );
}
