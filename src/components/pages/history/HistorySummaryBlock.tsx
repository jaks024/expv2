import { IHistorySummaryBlock } from "../../../interfaces/IHistorySummaryBlock";
import "../../../styles/HistorySummaryBlock.css";

export function HistorySummaryBlock({income, expense} : IHistorySummaryBlock)
{
    return (
        <div className="history-summary-block">
            <div className="history-summary-display">
                <span className="history-summary-value-label">Total Income</span>
                <span className="history-summary-value">${income.toFixed(2)}</span>
            </div>
            <div className="history-summary-display">
                <span className="history-summary-value-label">Total Expense</span>
                <span className="history-summary-value">${expense.toFixed(2)}</span>
            </div>
        </div>
    );
}
