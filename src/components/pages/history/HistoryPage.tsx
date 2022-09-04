import { IEntry } from "../../../interfaces/IEntry";
import { PageHeadBlock } from "../heading/PageHeadBlock";
import { HistoryDayStack } from "./HistoryDayStack";
import { HistorySummaryBlock } from "./HistorySummaryBlock";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import "../../../styles/HistoryPage.css";

export function HistoryPage()
{
    const onDeleteHandler = (entryId: number) => {
        alert("Deleted " + entryId);
    }

    const tempEntryData: IEntry[] = [
        {
            id: 1,
            year: 2022,
            month: 1,
            day: 1,
            vendor: "Test vendor",
            location: "",
            amount: 1234,
            isExpense: true,
            tags: "test1 test 2 test 3 test3 test4",
            notes: "",
            onDelete: () => onDeleteHandler(0)
        },
        {
            id: 2,
            year: 2022,
            month: 1,
            day: 1,
            vendor: "Test vendor 1",
            location: "",
            amount: 323,
            isExpense: false,
            tags: "",
            notes: "",
            onDelete: () => onDeleteHandler(1)
        },
    ];

    return (
        <div className="page history-page">
            <PageHeadBlock 
                name="History"
                month="from prop"
                year="from prop"
                isRefreshButtonEnabled={true}/> 
            <SimpleBar style={{height: "calc(100% - 50px)", padding:"10px"}}>
                <HistorySummaryBlock 
                    income={123}
                    expense={213}/>
                <HistoryDayStack date="Today" entries={tempEntryData}/>
                <HistoryDayStack date="Today" entries={tempEntryData}/>
                <HistoryDayStack date="Today" entries={tempEntryData}/>
                <HistoryDayStack date="Today" entries={tempEntryData}/>
                <br/>
                <br/>
                <br/>
                <br/>
            </SimpleBar>
        </div>
    );
}
