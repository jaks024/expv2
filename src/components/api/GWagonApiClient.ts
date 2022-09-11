import { IEntry } from "../../interfaces/IEntry";
import { IGlobalUserDataDto } from "../dto/IGlobalUserDataDto";
import { ISummaryDto } from "../dto/ISummaryDto";
import { emptySummary } from "../utilities";
import { userDataInstance } from "./GlobalUserData";

export function GWagonApiClient() {

    const ROOT = "https://gwagon-tae44npnkq-pd.a.run.app";

    const addNewEntry = async (newEntry: IEntry) => {
        console.log("post new entry ");
        console.log(JSON.stringify(newEntry));
        const headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        headers.append("accessToken", userDataInstance.accessToken);

        const res = await fetch(`${ROOT}/add`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newEntry)
        });

        console.log(res.status);
        return res.status;
    }

    const getAccessToken = (refreshToken: string, onReceived: (data: any) => void, onError: (err: any) => void) => {
        console.log("getting access token");
        fetch(`${ROOT}/auth/access`, {
            method: 'GET',
            headers: {
                refreshToken: refreshToken
            } 
        })
        .then((res) => res.json())
        .then((data) => {
            onReceived(data);
        })
        .catch((error) => {
            onError(error);
        });
    };

    const getRefreshToken = async (onGoogleLoginResponse: any, handler: (data: any) => void) => {
        console.log("getting refresh token");
        await fetch(`${ROOT}/auth/google`, {
            method: "GET",
            headers: {
                code: onGoogleLoginResponse.code
            } 
        })
        .then((res) => res.json())
        .then((data) => {
            handler(data);
        });
    }

    const getUserData = async () => {
        console.log("getting user data");
        const res = await fetch(`${ROOT}/userdata`, {
            method: "GET",
            headers: {
                accessToken: userDataInstance.accessToken
            }
        })
        
        return res.json();
    }

    const createUserData = async () => {
        console.log("creating user data");
        const res = await fetch(`${ROOT}/userdata/create`, {
            method: "POST",
            headers: {
                accessToken: userDataInstance.accessToken
            }
        });
        return res.status;
    }

    const updateUserData = async () => {
        console.log("updating user data");
        const dto: IGlobalUserDataDto = {
            currentMonth: userDataInstance.currentMonth,
            currentYear: userDataInstance.currentYear,
            numberOfEntries: userDataInstance.numberOfEntries,
            totalEntriesCounter: userDataInstance.totalEntriesCounter
        }
        console.log(JSON.stringify(dto));
        const headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        headers.append("accessToken", userDataInstance.accessToken);

        const res = await fetch(`${ROOT}/userdata`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(dto)
        });
        return res.status;
    }

    const getSummary = async () => {
        console.log("getting summary");
        try {
            const res = await fetch(`${ROOT}/summary/${userDataInstance.currentYear}-${userDataInstance.currentMonth}`, {
                method: "GET",
                headers: {
                    accessToken: userDataInstance.accessToken
                }
            });
            if (res.status == 200) {
                const parsed = await res.json();
                const dto: ISummaryDto = parsed;
                dto.incomeTagSums = new Map(Object.entries(parsed.incomeTagSums));
                dto.expenseTagSums = new Map(Object.entries(parsed.expenseTagSums));
                return dto;
            }
            return emptySummary;
        } catch (err) {
            return emptySummary;
        }
    };

    const getHistory = async () => {
        console.log("getting history");
        let retrievedData: IEntry[] = [];
        await fetch(`${ROOT}/get/${userDataInstance.currentYear}-${userDataInstance.currentMonth}`, {
            method: "GET",
            headers: {
                accessToken: userDataInstance.accessToken
            }
        })
        .then(res => res.json())
        .then(data => {
            retrievedData = data;
        })
        .catch(err => {
            console.log(err);
        })
        return retrievedData;
    }

    const deleteEntry = async (entryId: number) => {
        console.log("deleting entry");
        let status = 500;
        await fetch(`${ROOT}/delete/${userDataInstance.currentYear}-${userDataInstance.currentMonth}/${entryId}`, {
            method: "DELETE",
            headers: {
                accessToken: userDataInstance.accessToken
            }
        })
        .then(res => {
            status = res.status;
        })
        .catch(err => {
            console.log(err);
        });
        return status;
    }

    return {
        AddNewEntry: addNewEntry,
        GetRefreshToken: getRefreshToken,
        GetUserData: getUserData,
        CreateUserData: createUserData,
        UpdateUserData: updateUserData,
        GetSummary: getSummary,
        GetAccessToken: getAccessToken,
        GetHistory: getHistory,
        DeleteEntry: deleteEntry
    };
}