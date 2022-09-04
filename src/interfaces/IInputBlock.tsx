import { IEntry } from "./IEntry";

export interface IInputBlock {
    getNewEntryId: () => number;
    onAddNewEntry: (newEntry: IEntry) => void;
}