import { useEffect, useState } from "react";
import { IButton } from "../../../interfaces/IButton";
import { ButtonStack } from "../../generics/ButtonStack";
import { InputSelectField } from "./InputSelectField";
import { InputTextField } from "./InputTextField";

export function InputBlock()
{
    const [vendor, setVendor] = useState("");
    const [location, setLocation] = useState("");
    const [amount, setAmount] = useState("");

    const categoryButton: IButton[] = [
        {
            text: "Expense",
            onClick: () => alert("expense")
        },
        {
            text: "Income",
            onClick: () => alert("income")
        }
    ];

    const actionButtons: IButton[] = [
        {
            text: "Add",
            onClick: () => alert("added")
        },
        {
            text: "Clear",
            onClick: () => alert("cleared")
        }
    ];

    useEffect(() => {
        //alert(`${vendor} ${location} ${amount}`);
    });

    return (
        <div className="input-block">
            <InputTextField 
                label="Vendor"
                onDataChanged={setVendor}
            />
            <InputTextField 
                label="Location"
                onDataChanged={setLocation}
            />
            <InputTextField 
                label="Amount"
                onDataChanged={setAmount}
            />
            <InputSelectField buttons={categoryButton}/>
            <InputTextField 
                label="Notes"
                onDataChanged={setAmount}
            />
            <ButtonStack buttons={actionButtons}/>
        </div>
    );
}
