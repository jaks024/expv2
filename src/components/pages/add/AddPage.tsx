import { PageHeadBlock } from "../heading/PageHeadBlock";
import { InputBlock } from "./InputBlock";
import "../../../styles/AddPage.css";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export function AddPage()
{
    return (
        <div className="page add-page">
            <PageHeadBlock 
                name="Add"
                month="January"
                year="2022"
                isFilterButtonEnabled={true}/>
            <SimpleBar style={{height: "calc(100% - 150px)", padding:"10px"}}>
                <div className="add-page-input-block-stack">
                    <InputBlock />
                </div>
            </SimpleBar>
            
        </div>
    );
}
