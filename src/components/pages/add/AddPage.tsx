import { PageHeadBlock } from "../heading/PageHeadBlock";
import { InputBlock } from "./InputBlock";
import "../../../styles/AddPage.css";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { IEntry } from "../../../interfaces/IEntry";
import { userDataInstance } from "../../api/GlobalUserData";

export function AddPage()
{
    const onAddNewEntryHandler = (newEntry: IEntry) => {
        userDataInstance.apiClient.AddNewEntry(newEntry);
    }

    return (
        <div className="page add-page">
            <PageHeadBlock 
                name="Add"
                month=""
                year=""
                isRefreshButtonEnabled={false}/>
            <SimpleBar style={{height: "calc(100% - 50px)", padding:"10px"}}>
                <div className="add-page-input-block-stack">
                    <InputBlock 
                        getNewEntryId={() => userDataInstance.OnAddedNewEntry()}
                        onAddNewEntry={onAddNewEntryHandler}/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </SimpleBar>
        </div>
    );
}
