import { ISummaryValueBlock } from "../../../interfaces/ISummaryValueBlock";

export function SummaryValueBlock({mainLabelName, subLabelName, mainValue, subValue} : ISummaryValueBlock)
{
    const GetDecimals = (value: number) => {
        return (value % 1).toFixed(2);
    };

    return (
        <div className="summary-value-block">
            <div className="summary-value-block-main-label">{mainLabelName}</div>
            <div className="summary-value-block-main-value">
                {mainValue}
                <span className="summary-value-block-main-decimal">{GetDecimals(mainValue)}</span>
            </div>
            <div className="summary-value-block-sub-label">{subLabelName}</div>
            <div className="summary-value-block-sub-value">{subValue}</div>
        </div>
    );
}
