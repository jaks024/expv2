import { IButton } from "../../interfaces/IButton";
import { IButtonStack } from "../../interfaces/IButtonStack";

export function ButtonStack({buttons} : IButtonStack)
{
    const CreateButtons = (btns : IButton[]) => {
        return btns.map(btn => {
            return <Button text={btn.text} onClick={btn.onClick} /> 
        });
    }

    return (
        <div>
            {CreateButtons(buttons)}
        </div>
    );
}
