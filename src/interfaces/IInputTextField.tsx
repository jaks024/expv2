export interface IInputTextField
{
    label: string;
    description: string;
    initialValue: string;
    onDataChanged: (value: any) => void;
}
