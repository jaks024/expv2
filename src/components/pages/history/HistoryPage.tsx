import { IEntry } from "../../../interfaces/IEntry";
import { PageHeadBlock } from "../heading/PageHeadBlock";
import { HistoryDayStack } from "./HistoryDayStack";
import { HistorySummaryBlock } from "./HistorySummaryBlock";

export function HistoryPage()
{
    const tempEntryData: IEntry[] = [
        {
            id: 1,
            vendor: "Test vendor",
            location: "location 1",
            amount: 1234,
            isExpense: true,
            tags: [],
            notes: "some notes"
        },
        {
            id: 2,
            vendor: "Test vendor 1",
            location: "location 2",
            amount: 323,
            isExpense: false,
            tags: [],
            notes: ""
        }
    ];

    return (
        <div className="page history-page">
            <PageHeadBlock 
                name="History"
                month="from prop"
                year="from prop"
                isFilterButtonEnabled={true}/> 
            <HistorySummaryBlock 
                income={123}
                expense={213}/>
            <HistoryDayStack date="Today" entries={tempEntryData}/>
        </div>
    );
}
