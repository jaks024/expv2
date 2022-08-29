import { PageHeadBlock } from "../heading/PageHeadBlock";
import { InputBlock } from "./InputBlock";

export function AddPage()
{
    return (
        <div className="page add-page">
            <PageHeadBlock 
                name="Summary"
                month="January"
                year="2022"/>
            <div className="add-page-input-block-stack">
                <InputBlock />
            </div>
        </div>
    );
}
