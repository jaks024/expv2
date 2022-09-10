import "../../../styles/SummaryPage.css";
import { IBreakdownValueGraphData } from "../../../interfaces/IBreakdownValueGraphData";
import { PageHeadBlock } from "../heading/PageHeadBlock";
import { BreakdownBlock } from "./BreakdownBlock";
import { SummaryValueBlock } from "./SummaryValueBlock";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { userDataInstance } from "../../api/GlobalUserData";
import { useState, useEffect } from "react";
import { emptySummary, GetMonthName } from "../../utilities";
import { LoadingBlocker } from "../../generics/LoadingBlocker";

export function SummaryPage() 
{
    const [isDataRetrieved, setIsDataRetrieved] = useState(false);
    const [summaryData, setSummaryData] = useState(emptySummary);

    useEffect(() => {
        setTimeout(() => {
            if (userDataInstance.accessToken.length > 0) {
                getSummaryData();
            } else {
                setIsDataRetrieved(true);
            }
            userDataInstance.RefreshSummary = refreshData;
        }, 1500);
    }, []);

    const getSummaryData = async () => {
        const data = await userDataInstance.apiClient.GetSummary();
        setSummaryData(data);
        setIsDataRetrieved(true);
    };

    const refreshData = async () => {
        console.log("refreshed summary");
        setIsDataRetrieved(false);
        await getSummaryData();
    }

    const TagSumsToBreakdownGraphData = (tagSums: Map<string, number>) => {
        const breakdownData: IBreakdownValueGraphData[] = [];
        tagSums.forEach((val, key) => {
            const item: IBreakdownValueGraphData = {
                title: key,
                value: val
            };
            breakdownData.push(item);
        });
        return breakdownData;
    }

    return (
        <div className="page summary-page">
            <LoadingBlocker 
                isLoading={!isDataRetrieved}
                loadingText="Retrieving Summary..."/>
            <PageHeadBlock 
                name="Summary"
                month={GetMonthName(userDataInstance.currentMonth)}
                year={userDataInstance.currentYear.toString()}
                isRefreshButtonEnabled={true}
                onRefresh={refreshData}
                />
            <SimpleBar style={{height: "calc(100% - 50px)", padding:"10px"}}>
                <SummaryValueBlock 
                    mainLabelName="Income"
                    mainValue={summaryData.incomeTotal}
                    subLabelName="Daily Average"
                    subValue={summaryData.incomeAverage}/>
                <SummaryValueBlock 
                    mainLabelName="Expense"
                    mainValue={summaryData.expenseTotal}
                    subLabelName="Daily Average"
                    subValue={summaryData.expenseAverage}/>
                <BreakdownBlock title="Income Breakdown"
                    id={0} data={TagSumsToBreakdownGraphData(summaryData.incomeTagSums)}/>
                <BreakdownBlock title="Expense Breakdown"
                    id={1} data={TagSumsToBreakdownGraphData(summaryData.expenseTagSums)}/>
                <br />
                <br />
                <br />
                <br />
            </SimpleBar>
        </div>
    );
}
