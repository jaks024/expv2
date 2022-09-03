import { ISelectableButton } from "../../../interfaces/ISelectableButton";
import { ISeelctableButtonStack } from "../../../interfaces/ISelectableButtonStack";
import { GetUniqueId } from "../../utilities";
import { InputSelectButton } from "./InputSelectButton";

export function InputSelectField({buttons} : ISeelctableButtonStack)
{
    const CreateSelectButtons = (btns: ISelectableButton[]) => {
        return btns.map(btn => {
            return <InputSelectButton 
                        key={`select-${GetUniqueId()}-${btn.text}`} 
                        text={btn.text} 
                        onClick={btn.onClick}
                        isSelected={btn.isSelected} />
        });
    };

    return (
        <div className="button-stack">
            {CreateSelectButtons(buttons)}
        </div>
    );
}
