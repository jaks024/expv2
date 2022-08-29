import { IButton } from "../../../interfaces/IButton";
import { IButtonStack } from "../../../interfaces/IButtonStack";
import { GetUniqueId } from "../../utilities";
import { InputSelectButton } from "./InputSelectButton";

export function InputSelectField({buttons} : IButtonStack)
{
    const CreateSelectButtons = (btns: IButton[]) => {
        return btns.map(btn => {
            return <InputSelectButton 
                        key={`select-${GetUniqueId()}-${btn.text}`} 
                        text={btn.text} 
                        onClick={btn.onClick} />
        });
    };

    return (
        <div>
            {CreateSelectButtons(buttons)}
        </div>
    );
}
