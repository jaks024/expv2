import { GWagonApiClient } from "./GWagonApiClient";

export function GlobalUserData() {
    const accessToken = "";
    const numberOfEntires = 0;
    const currentYear = 2022;
    const currentMonth = 1;
    const apiClient = GWagonApiClient();
    const onAddedNewEntry = () => { numberOfEntires + 1; return numberOfEntires};
    return {
        accessToken: accessToken,
        numberOfEntries: numberOfEntires,
        currentYear: currentYear,
        currentMonth: currentMonth,
        apiClient: apiClient,
        OnAddedNewEntry: onAddedNewEntry
    };
}

export const userDataInstance = GlobalUserData();