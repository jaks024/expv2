import { json } from "stream/consumers";
import { IEntry } from "../../interfaces/IEntry";
import { IGlobalUserDataDto } from "../dto/IGlobalUserDataDto";
import { userDataInstance } from "./GlobalUserData";

export function GWagonApiClient() {

    const ROOT = "http://localhost:3000";

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

    const getRefreshToken = async (onGoogleLoginResponse: any, handler: (data: any) => void) => {
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
        const res = await fetch(`${ROOT}/userdata`, {
            method: "GET",
            headers: {
                accessToken: userDataInstance.accessToken
            }
        })
        
        return res.json();
    }

    const createUserData = async () => {
        const res = await fetch(`${ROOT}/userdata/create`, {
            method: "POST",
            headers: {
                accessToken: userDataInstance.accessToken
            }
        });
        return res.status;
    }

    const updateUserData = async () => {
        const dto: IGlobalUserDataDto = {
            currentMonth: userDataInstance.currentMonth,
            currentYear: userDataInstance.currentYear,
            numberOfEntries: userDataInstance.numberOfEntries
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

    return {
        AddNewEntry: addNewEntry,
        GetRefreshToken: getRefreshToken,
        GetUserData: getUserData,
        CreateUserData: createUserData,
        UpdateUserData: updateUserData
    };
}