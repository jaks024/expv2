import "../../../styles/BreakdownValueBar.css";
import { IBreakdownValueBar } from "../../../interfaces/IBreakdownValueBar";

export function BreakdownValueBar({title, value, width, color} : IBreakdownValueBar)
{
    const barStyle = {
        background: color,
        width: width
    };

    return (
        <div className="breakdown-value-bar" style={barStyle}>
            <div className="breakdown-value-details">
                <span>{title}&ensp;</span>
                <span>${value.toFixed(2)}</span>
            </div>
        </div>
    );
}
