import "../../../styles/BreakdownBlock.css";
import { IBreakdownBlock } from "../../../interfaces/IBreakdownBlock";
import { BreakdownValueGraph } from "./BreakdownValueGraph";

export function BreakdownBlock({id, title, data} : IBreakdownBlock)
{
    return (
        <div className="breakdown-block">
            <div className="breakdown-block-header">
                <div className="breakdown-block-title">{title}</div>
                <button className="breakdown-block-filter">By Amount</button>
            </div>
            <BreakdownValueGraph id={id} data={data}/>
        </div>
    );
}
