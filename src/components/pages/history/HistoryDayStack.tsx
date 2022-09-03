import { IHistoryDayStack } from "../../../interfaces/IHistoryDayStack";
import { HistoryEntryStack } from "./HistoryEntryStack";
import "../../../styles/HistoryDayStack.css";

export function HistoryDayStack({date, entries} : IHistoryDayStack)
{
    return (
        <div className="history-day-stack">
            <div className="history-day-stack-label">{date}</div>
            <HistoryEntryStack data={entries}/>
        </div>
    );
}
