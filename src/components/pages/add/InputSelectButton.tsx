import { IButton } from "../../../interfaces/IButton";

export function InputSelectButton({text, onClick} : IButton)
{
    return (
        <button title={text} onClick={onClick} />
    );
}
