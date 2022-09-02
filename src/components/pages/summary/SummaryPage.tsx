import "../../../styles/SummaryPage.css";
import { IBreakdownValueGraphData } from "../../../interfaces/IBreakdownValueGraphData";
import { PageHeadBlock } from "../heading/PageHeadBlock";
import { BreakdownBlock } from "./BreakdownBlock";
import { SummaryValueBlock } from "./SummaryValueBlock";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export function SummaryPage() 
{
    const GetRandomNumber = () => Math.random() * 5000;

    const GenerateTempGraphData = () => {
        const data:IBreakdownValueGraphData[] = [];
        for (let i = 0; i < 10; ++i)
        {
            const randVal = Math.random() * 5000;
            data.push({ title: `Test ${i}`, value: randVal})
        }
        return data;
    };

    return (
        <div className="page summary-page">
            <PageHeadBlock 
                name="Summary"
                month="Jan"
                year="2022"
                isFilterButtonEnabled={true}
                />
            <SimpleBar style={{height: "96%", padding:"10px"}}>
                <SummaryValueBlock 
                    mainLabelName="Income"
                    mainValue={GetRandomNumber()}
                    subLabelName="Average"
                    subValue={GetRandomNumber()}/>
                <SummaryValueBlock 
                    mainLabelName="Expense"
                    mainValue={GetRandomNumber()}
                    subLabelName="Average"
                    subValue={GetRandomNumber()}/>
                <BreakdownBlock title="Income Breakdown"
                    id={0} data={GenerateTempGraphData()}/>
                <BreakdownBlock title="Expense Breakdown"
                    id={1} data={GenerateTempGraphData()}/>
                <br />
                <br />
                <br />
            </SimpleBar>
        </div>
    );
}
