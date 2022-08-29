import { IBreakdownValueGraph } from "../../../interfaces/IBreakdownValueGraph";
import { IBreakdownValueGraphData } from "../../../interfaces/IBreakdownValueGraphData";
import { BreakdownValueBar } from "./BreakdownValueBar";

export function BreakdownValueGraph({ data }: IBreakdownValueGraph)
{
    const GenerateBars = (data: IBreakdownValueGraphData[]) => {
        return data.map(d => {
            return <BreakdownValueBar 
                        title={d.title}
                        value={d.value}
                        width="100%"
                        color="blue"/>
        });
    }

    return (
        <div className="breakdown-value-graph">
            {GenerateBars(data)}
        </div>
    );
}
