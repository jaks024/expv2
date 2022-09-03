import { IButton } from "../../interfaces/IButton";
import { IButtonStack } from "../../interfaces/IButtonStack";
import { GetUniqueId } from "../utilities";
import "../../styles/ButtonStack.css";

export function ButtonStack({buttons} : IButtonStack)
{
    const CreateButtons = (btns : IButton[]) => {
        return btns.map(btn => {
            return <button key={GetUniqueId()} type="button" onClick={btn.onClick}>
                {btn.text}
            </button>
        });
    }

    return (
        <div className="button-stack">
            {CreateButtons(buttons)}
        </div>
    );
}
