import { IBreakdownValueGraphData } from "./IBreakdownValueGraphData";

export interface IBreakdownBlock{
    id: number;
    title: string;
    data: IBreakdownValueGraphData[];
}
