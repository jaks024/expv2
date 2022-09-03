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
            vendor: "Test vendor",
            location: "",
            amount: 1234,
            isExpense: true,
            tags: [{name: "tag 1", color: "dodgerblue"}, {name: "tag 1", color: "dodgerblue"}, {name: "tag 1", color: "dodgerblue"}, {name: "tag 1", color: "dodgerblue"}, {name: "tag 1", color: "dodgerblue"}, {name: "tag 1", color: "dodgerblue"}],
            notes: "",
            onDelete: () => onDeleteHandler(0)
        },
        {
            id: 2,
            vendor: "Test vendor 1",
            location: "",
            amount: 323,
            isExpense: false,
            tags: [],
            notes: "",
            onDelete: () => onDeleteHandler(1)
        },
        {
            id: 2,
            vendor: "Test vendor 1",
            location: "location 2",
            amount: 323,
            isExpense: false,
            tags: [],
            notes: "",
            onDelete: () => onDeleteHandler(2)
        }
        ,
        {
            id: 2,
            vendor: "Test vendor 1",
            location: "location 2",
            amount: 323,
            isExpense: false,
            tags: [],
            notes: "",
            onDelete: () => onDeleteHandler(3)
        }
        ,
        {
            id: 2,
            vendor: "Test vendor 1",
            location: "location 2",
            amount: 323,
            isExpense: false,
            tags: [],
            notes: "",
            onDelete: () => onDeleteHandler(4)
        }
        ,
        {
            id: 2,
            vendor: "Test vendor 1",
            location: "location 2",
            amount: 323,
            isExpense: false,
            tags: [],
            notes: "",
            onDelete: () => onDeleteHandler(5)
        }
        ,
        {
            id: 2,
            vendor: "Test vendor 1",
            location: "location 2",
            amount: 323,
            isExpense: false,
            tags: [],
            notes: "",
            onDelete: () => onDeleteHandler(6)
        }

    ];

    return (
        <div className="page history-page">
            <PageHeadBlock 
                name="History"
                month="from prop"
                year="from prop"
                isFilterButtonEnabled={true}/> 
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
