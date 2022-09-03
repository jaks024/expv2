import { IEntry } from "../../../interfaces/IEntry";
import { ITag } from "../../../interfaces/ITag";
import { Tag } from "../../generics/Tag";
import { GetUniqueId } from "../../utilities";
import deleteIcon from "../../../icons/delete.svg";
import "../../../styles/HistoryEntry.css";

export function HistoryEntry({vendor, location, amount, isExpense, tags, notes, onDelete} : IEntry)
{
    const GenerateTags = (tags: ITag[]) => {
        return tags.map(tag => {
            return <Tag key={`${GetUniqueId()}-${tag.name}`} {...tag} />
        });
    };

    return (
        <div className="history-entry">
            <div className={`history-entry-type-label ${isExpense ? "history-entry-expense" : "history-entry-income"}`}>
                {isExpense ? "Expense" : "Income" }
            </div>
            <div className="history-entry-content">
                <div className="history-entry-content-main">
                    <div>
                        {vendor}
                    </div>
                    <div>
                        ${amount.toFixed(2)}
                    </div>
                    <button className="history-entry-delete-button" onClick={onDelete}>
                        <img src={deleteIcon} alt="delete"/>
                    </button>
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
