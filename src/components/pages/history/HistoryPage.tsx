import { IEntry } from "../../../interfaces/IEntry";
import { PageHeadBlock } from "../heading/PageHeadBlock";
import { HistoryDayStack } from "./HistoryDayStack";
import { HistorySummaryBlock } from "./HistorySummaryBlock";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import "../../../styles/HistoryPage.css";
import { userDataInstance } from "../../api/GlobalUserData";
import { useState, useEffect } from "react";
import { GetMonthName } from "../../utilities";
import { LoadingBlocker } from "../../generics/LoadingBlocker";

export function HistoryPage()
{
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [isDataRetrieved, setIsDataRetrieved] = useState(false);
    const [historyData, setHistoryData] = useState<IEntry[] | null>(null);
    const onDeleteHandler = async (entryId: number) => {
        const status =  await userDataInstance.apiClient.DeleteEntry(entryId);
        if (status == 200) {
            userDataInstance.OnRemovedEntry();
        }
        return status;
    }

    useEffect(() => {
        setTimeout(() => {
            if (userDataInstance.accessToken.length > 0) {
                getHistoryData();
            } else {
                setIsDataRetrieved(true);
            }
            userDataInstance.RefreshHistory = refreshData;
        }, 1500);
    }, []);

    const getHistoryData = async () => {
        const data = await userDataInstance.apiClient.GetHistory();
        console.log(data);
        if (typeof data === "number") {
            setHistoryData(null);
            setIsDataRetrieved(true);
            return;
        }
        setHistoryData(data);
        setIsDataRetrieved(true);
    }

    const refreshData = async () => {
        setIsDataRetrieved(false);
        await getHistoryData();
    }

    const renderHistoryData = () => {
        if (historyData == null) {
            return;
        }
        const sortedEntries: [IEntry[]] = [[]];
        for (let i = 0; i < 31; ++i) {
            sortedEntries.push([]);
        }
        let incomeSum = 0;
        let expenseSum = 0;
        historyData.forEach(entry => {
            if (entry.isExpense) {
                expenseSum += entry.amount;
            } else {
                incomeSum += entry.amount;
            }
            entry.onDelete = onDeleteHandler;
            sortedEntries[entry.day - 1].push(entry);
        });
        if (incomeSum != totalIncome) {
            setTotalIncome(incomeSum);
        }
        if (expenseSum != totalExpense) {
            setTotalExpense(expenseSum);
        }
        return sortedEntries.map((entries) => {
            if (entries.length == 0) {
                return;
            }
            return <HistoryDayStack 
                        key={`${entries[0].year}-${entries[0].month}-${entries[0].day}`}
                        date={`${GetMonthName(entries[0].month)} ${entries[0].day}`} 
                        entries={entries}/>
        });
    }

    return (
        <div className="page history-page">
            <LoadingBlocker 
                isLoading={!isDataRetrieved}
                loadingText="Retrieving History..." />
            <PageHeadBlock 
                name="History"
                month={GetMonthName(userDataInstance.currentMonth)}
                year={userDataInstance.currentYear.toString()}
                isRefreshButtonEnabled={true}
                onRefresh={refreshData}/> 
            <SimpleBar style={{height: "calc(100% - 50px)", padding:"10px"}}>
                <HistorySummaryBlock 
                    income={totalIncome}
                    expense={totalExpense}/>
                {renderHistoryData()}
                <br/>
                <br/>
                <br/>
                <br/>
            </SimpleBar>
        </div>
    );
}
