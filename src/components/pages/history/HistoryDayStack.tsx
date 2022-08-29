import { IEntry } from "../../../interfaces/IEntry";
import { IHistoryDayStack } from "../../../interfaces/IHistoryDayStack";
import { HistoryEntryStack } from "./HistoryEntryStack";

export function HistoryDayStack({date, entries} : IHistoryDayStack)
{
    return (
        <div className="history-day-stack">
            <div className="history-day-stack-label">{date}</div>
            <HistoryEntryStack data={entries}/>
        </div>
    );
}
