import "../../../styles/BreakdownBlock.css";
import { IBreakdownValueGraph } from "../../../interfaces/IBreakdownValueGraph";
import { IBreakdownValueGraphData } from "../../../interfaces/IBreakdownValueGraphData";
import { GetUniqueId } from "../../utilities";
import { BreakdownValueBar } from "./BreakdownValueBar";

export function BreakdownValueGraph({ data }: IBreakdownValueGraph)
{
    const GenerateBars = (data: IBreakdownValueGraphData[]) => {
        if (data.length <= 0) {
            return;
        }
        
        data.sort((a, b) => b.value - a.value);
        const max = data[0].value;
        
        return data.map((d, index) => {
            const width = (d.value / max) * 100;
            const alpha = Math.min(Math.max(((data.length - index) / data.length) + 0.3, 0.3), 1);
            return <BreakdownValueBar 
                        key={`breakdown-${GetUniqueId()}-${d.title}`}
                        title={d.title}
                        value={d.value}
                        width={`${width}%`}
                        color={`rgba(96, 93, 241, ${alpha})`}/>
        });
    }

    return (
        <div className="breakdown-value-graph">
            {GenerateBars(data)}
        </div>
    );
}
