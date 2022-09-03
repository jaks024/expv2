import { ISelectableButton } from "../../../interfaces/ISelectableButton";
import "../../../styles/InputSelectButton.css";

export function InputSelectButton({text, onClick, isSelected} : ISelectableButton)
{
    return (
        <button className={isSelected ? "button-selected" : ""} onClick={onClick}>{text}</button>
    );
}
