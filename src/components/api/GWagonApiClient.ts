import { IEntry } from "../../interfaces/IEntry";
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

        await fetch(`${ROOT}/add`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newEntry)
        })
        .then((res) => console.log(res))
        .catch(err => {
            console.log(err);
        });
    }

    const getRefreshToken = (onGoogleLoginResponse: any, handler: (data: any) => void) => {
        fetch(`${ROOT}/auth/google`, {
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

    return {
        AddNewEntry: addNewEntry,
        GetRefreshToken: getRefreshToken
    };
}