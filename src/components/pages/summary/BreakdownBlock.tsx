import { IBreakdownBlock } from "../../../interfaces/IBreakdownBlock";
import { BreakdownValueGraph } from "./BreakdownValueGraph";

export function BreakdownBlock({title, data} : IBreakdownBlock)
{
    return (
        <div className="breakdown-block">
            <div className="breakdown-block-header">
                <div className="breakdown-block-title">{title}</div>
                <div className="breakdown-block-filter">By Amount</div>
            </div>
            <BreakdownValueGraph />
        </div>
    );
}
