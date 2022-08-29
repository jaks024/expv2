import { IEntry } from "../../../interfaces/IEntry";
import { ITag } from "../../../interfaces/ITag";
import { Tag } from "../../generics/Tag";
import { GetUniqueId } from "../../utilities";

export function HistoryEntry({id, vendor, location, amount, isExpense, tags, notes} : IEntry)
{
    const GenerateTags = (tags: ITag[]) => {
        return tags.map(tag => {
            return <Tag key={`${GetUniqueId()}-${tag.name}`} {...tag} />
        });
    };

    return (
        <div className="history-entry">
            <div className={`history-entry-type-label ${isExpense ? "history-entry-expense" : "history-entry-expense"}`}>
                {isExpense ? "Expense" : "Income" }
            </div>
            <div className="history-entry-content">
                <div className="history-entry-content-main">
                    <div>
                        {vendor}
                    </div>
                    <div>
                        {amount}
                    </div>
                </div>
                <div className="history-entry-sub-content">
                    <div>
                        {location}
                    </div>
                    <div>
                        {notes}
                    </div>
                    <div className="history-entry-tag-stack">
                        {GenerateTags(tags)}
                    </div>
                </div>
            </div>
        </div>
    );
}
