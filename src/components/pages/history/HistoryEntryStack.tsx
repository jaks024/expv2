import { IEntry } from "../../../interfaces/IEntry";
import { IHistoryEntryStack } from "../../../interfaces/IHistoryEntryStack";
import { GetUniqueId } from "../../utilities";
import { HistoryEntry } from "./HistoryEntry";

export function HistoryEntryStack({data} : IHistoryEntryStack)
{
    const GenerateEntries = (entries: IEntry[]) => {
        return entries.map(entry => {
            return <HistoryEntry key={`${GetUniqueId()}`} {...entry} />
        });
    };

    return (
        <div className="history-entry-stack">
            {GenerateEntries(data)}
        </div>
    );
}