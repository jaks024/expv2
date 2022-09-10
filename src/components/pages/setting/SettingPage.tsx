import { PageHeadBlock } from "../heading/PageHeadBlock";
import { useState } from "react";
import { userDataInstance } from "../../api/GlobalUserData";
import "../../../styles/SettingPage.css";
import { InputTextField } from "../add/InputTextField";
import { SettingGoogleLogin } from "./SettingGoogleLogin";
import { IGlobalUserDataDto } from "../../dto/IGlobalUserDataDto";

export function SettingPage() {

    const [isUserDataRetrieved, setIsUserDataRetrieved] = useState(false);
    const [numberOfEntries, setNumberOfEntries] = useState(userDataInstance.numberOfEntries);
    let timeoutId: NodeJS.Timeout | null = null;

    const delayedSaveData = () => {
        if (timeoutId != null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            saveUserData();
            timeoutId = null;
        }, 2000);
    }

    const inputViewYearHandler = (value: any) => {
        if (!isNaN(+value)) {
            const val = +value;
            if (val >= 0) {
                userDataInstance.currentYear = val;
                delayedSaveData();
            }
        }
    }

    const inputViewMonthHandler = (value: any) => {
        if (!isNaN(+value)) {
            const val = +value;
            if (val >= 1 && val <= 12) {
                userDataInstance.currentMonth = val;
                delayedSaveData();
            }
        }
    }

    const onDataRetrieved = () => {
        setIsUserDataRetrieved(true);
        setNumberOfEntries(userDataInstance.numberOfEntries);
        userDataInstance.OnAddedNewEntry = () => {
            setNumberOfEntries(userDataInstance.numberOfEntries);
            saveUserData();
        }
        userDataInstance.OnRemovedEntry = () => {
            --userDataInstance.numberOfEntries;
            setNumberOfEntries(userDataInstance.numberOfEntries); 
            saveUserData();
        }
    }

    const getUserData = async () => {
        const data = await userDataInstance.apiClient.GetUserData();
        console.log(data);
        if (data == null) {
            const status = await userDataInstance.apiClient.CreateUserData();
            if (status == 200) {
                saveUserData();
            }
            onDataRetrieved();
            return;
        }
        
        const parsedData: IGlobalUserDataDto = data;
        console.log(parsedData);
        userDataInstance.currentMonth = parsedData.currentMonth;
        userDataInstance.currentYear = parsedData.currentYear;
        userDataInstance.numberOfEntries = parsedData.numberOfEntries;
        onDataRetrieved();
    };

    const saveUserData = () => {
        userDataInstance.apiClient.UpdateUserData();
        console.log("saved user data");
    }

    const renderViewingOptions = () => {
        return (
            <div>
                <div className="settings-options-label">Viewing</div>
                    <InputTextField
                        label="Year"
                        description="Which year to view?"
                        initialValue={userDataInstance.currentYear.toString()}
                        onDataChanged={inputViewYearHandler}
                    />
                    <InputTextField
                        label="Month"
                        description="Which month to view?"
                        initialValue={userDataInstance.currentMonth.toString()}
                        onDataChanged={inputViewMonthHandler}
                    />
                <br />
                <br />
            </div>
        );
    }

    return (
        <div className="page">
            <PageHeadBlock 
                name="Settings"
                month=""
                year=""
                isRefreshButtonEnabled={false}
            />
            <div className="settings-options-stack">
                {isUserDataRetrieved ? renderViewingOptions() : ""}
                <div className="settings-options-label">Stats</div>
                <div className="settings-options-text"> 
                    {`Total number of entires: ${numberOfEntries}`}
                </div>
                <br />
                <br />
                <div className="settings-options-label">Saving</div>
                <SettingGoogleLogin onLoginAction={getUserData}/>
            </div>
        </div>
    );
}
