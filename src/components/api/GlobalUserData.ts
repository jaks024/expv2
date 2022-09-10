import { GWagonApiClient } from "./GWagonApiClient";

export function GlobalUserData() {
    const accessToken = "";
    const numberOfEntires = 0;
    const totalEntriesCounter = 0;
    const currentYear = 2022;
    const currentMonth = 1;
    const apiClient = GWagonApiClient();
    const onAddedNewEntry: () => any = () => undefined;
    const onRemovedEntry: () => any = () => undefined;
    const refreshSummary: () => any = () => undefined;
    const refreshHistory: () => any = () => undefined;
    return {
        accessToken: accessToken,
        numberOfEntries: numberOfEntires,
        totalEntriesCounter: totalEntriesCounter,
        currentYear: currentYear,
        currentMonth: currentMonth,
        apiClient: apiClient,
        OnAddedNewEntry: onAddedNewEntry,
        OnRemovedEntry: onRemovedEntry,
        RefreshSummary: refreshSummary,
        RefreshHistory: refreshHistory
    };
}

export const userDataInstance = GlobalUserData();