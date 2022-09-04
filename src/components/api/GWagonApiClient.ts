import { IEntry } from "../../interfaces/IEntry";

export function GWagonApiClient(authToken: string) {

    const addNewEntry = (newEntry: IEntry) => {
        console.log("added ");
        console.log(newEntry);
    }

    return {
        AddNewEntry: addNewEntry
    };
}