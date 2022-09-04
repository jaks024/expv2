import { PageHeadBlock } from "../heading/PageHeadBlock";
import { InputBlock } from "./InputBlock";
import "../../../styles/AddPage.css";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { GWagonApiClient } from "../../api/GWagonApiClient";
import { IEntry } from "../../../interfaces/IEntry";

export function AddPage()
{
    const apiClient = GWagonApiClient("auth token");

    const onAddNewEntryHandler = (newEntry: IEntry) => {
        apiClient.AddNewEntry(newEntry);
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
                        getNewEntryId={() => 1}
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
