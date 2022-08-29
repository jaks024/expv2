import { IBreakdownValueGraph } from "../../../interfaces/IBreakdownValueGraph";
import { IBreakdownValueGraphData } from "../../../interfaces/IBreakdownValueGraphData";
import { GetUniqueId } from "../../utilities";
import { BreakdownValueBar } from "./BreakdownValueBar";

export function BreakdownValueGraph({ id, data }: IBreakdownValueGraph)
{
    const GenerateBars = (data: IBreakdownValueGraphData[]) => {
        return data.map(d => {
            return <BreakdownValueBar 
                        key={`breakdown-${GetUniqueId()}-${d.title}`}
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
