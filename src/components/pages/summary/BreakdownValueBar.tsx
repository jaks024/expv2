import { IBreakdownValueBar } from "../../../interfaces/IBreakdownValueBar";

export function BreakdownValueBar({title, value, width, color} : IBreakdownValueBar)
{
    const barStyle = {
        color: color,
        width: width
    };

    return (
        <div className="breakdown-value-bar" style={barStyle}>
            <div className="breakdown-value-details">
                <span>{title}</span>
                <span>${value}</span>
            </div>
        </div>
    );
}
