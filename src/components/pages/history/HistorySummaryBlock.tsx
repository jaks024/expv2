import { IHistorySummaryBlock } from "../../../interfaces/IHistorySummaryBlock";

export function HistorySummaryBlock({income, expense} : IHistorySummaryBlock)
{
    return (
        <div className="history-summary-block">
            <div className="history-summary-wrapper">
                <div className="history-summary-display">
                    <span className="history-summary-value-label">Income</span>
                    <span className="history-summary-value">${income}</span>
                </div>
                <div className="history-summary-display">
                    <span className="history-summary-value-label">Expense</span>
                    <span className="history-summary-value">${expense}</span>
                </div>
            </div>
        </div>
    );
}
