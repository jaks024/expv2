import { IBreakdownValueGraphData } from "../../../interfaces/IBreakdownValueGraphData";
import { PageHeadBlock } from "../heading/PageHeadBlock";
import { BreakdownBlock } from "./BreakdownBlock";
import { SummaryValueBlock } from "./SummaryValueBlock";

export function SummaryPage() 
{
    const tempGraphData: IBreakdownValueGraphData[] = [
        {
            title: "Test 1",
            value: 123.45
        },
        {
            title: "Test 2",
            value: 67.89
        }
    ];

    return (
        <div className="page summary-page">
            <PageHeadBlock 
                name="Summary"
                month="from props"
                year="from props"
                />
            <SummaryValueBlock 
                mainLabelName="Income"
                mainValue={123.00}
                subLabelName="Average"
                subValue={12.32}/>
            <SummaryValueBlock 
                mainLabelName="Expense"
                mainValue={123.00}
                subLabelName="Average"
                subValue={12.32}/>
            <BreakdownBlock title="Income Breakdown"
                id={0} data={tempGraphData}/>
            <BreakdownBlock title="Expense Breakdown"
                id={1} data={tempGraphData}/>
        </div>
    );
}
