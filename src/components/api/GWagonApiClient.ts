import { IEntry } from "../../interfaces/IEntry";

export function GWagonApiClient() {

    const ROOT = "http://localhost:3000";

    const addNewEntry = (newEntry: IEntry) => {
        console.log("added ");
        console.log(JSON.stringify(newEntry));
        console.log(newEntry);
    }

    const getRefreshToken = (onGoogleLoginResponse: any, handler: (data: any) => void) => {
        fetch(`${ROOT}/auth/google`, {
            method: 'GET',
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