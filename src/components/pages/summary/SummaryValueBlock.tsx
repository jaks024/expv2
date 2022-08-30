import "../../../styles/SummaryValueBlock.css";
import { ISummaryValueBlock } from "../../../interfaces/ISummaryValueBlock";

export function SummaryValueBlock({mainLabelName, subLabelName, mainValue, subValue} : ISummaryValueBlock)
{
    const GetDecimals = (value: number) => {
        const decimal = (value % 1).toFixed(2);
        return decimal.toString().split(".")[1];
    };

    return (
        <div className="summary-value-block">
            <div className="summary-value-block-main-label">{mainLabelName}</div>
            <div className="summary-value-block-main-value">
                ${mainValue.toString().split(".")[0]}
                <span className="summary-value-block-main-decimal">.{GetDecimals(mainValue)}</span>
            </div>
            <div className="summary-value-block-sub-label">{subLabelName}</div>
            <div className="summary-value-block-sub-value">${subValue.toFixed(2)}</div>
        </div>
    );
}
