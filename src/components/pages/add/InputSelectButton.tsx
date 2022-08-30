import { IButton } from "../../../interfaces/IButton";

export function InputSelectButton({text, onClick} : IButton)
{
    return (
        <button onClick={onClick}>{text}</button>
    );
}
