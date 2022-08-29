import { IButton } from "../../interfaces/IButton";
import { IButtonStack } from "../../interfaces/IButtonStack";
import { GetUniqueId } from "../utilities";

export function ButtonStack({buttons} : IButtonStack)
{
    const CreateButtons = (btns : IButton[]) => {
        return btns.map(btn => {
            return <button key={GetUniqueId()} title={btn.text} onClick={btn.onClick} /> 
        });
    }

    return (
        <div>
            {CreateButtons(buttons)}
        </div>
    );
}
