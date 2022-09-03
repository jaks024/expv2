import { useEffect, useState } from "react";
import { IButton } from "../../../interfaces/IButton";
import { ISelectableButton } from "../../../interfaces/ISelectableButton";
import { ButtonStack } from "../../generics/ButtonStack";
import { InputSelectField } from "./InputSelectField";
import { InputTagField } from "./InputTagField";
import { InputTextField } from "./InputTextField";

export function InputBlock()
{
    const [vendor, setVendor] = useState("");
    const [location, setLocation] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(true);

    const categoryButton: ISelectableButton[] = [
        {
            text: "Expense",
            onClick: () => setIsExpense(true),
            isSelected: isExpense
        },
        {
            text: "Income",
            onClick: () => setIsExpense(false),
            isSelected: !isExpense
        }
    ];

    const actionButtons: IButton[] = [
        {
            text: "Add New Entry",
            onClick: () => {console.log("a")}
        },
        {
            text: "Clear Inputs",
            onClick: () => {console.log("a")}
        }
    ];

    useEffect(() => {
        //alert(`${vendor} ${location} ${amount}`);
    });

    return (
        <div className="input-block">
            <InputTextField 
                label="Vendor*"
                onDataChanged={setVendor}
            />
            <InputTextField 
                label="Location"
                onDataChanged={setLocation}
            />
            <InputTextField 
                label="Amount*"
                onDataChanged={setAmount}
            />
            <InputSelectField buttons={categoryButton}/>
            <InputTagField />
            <InputTextField 
                label="Notes"
                onDataChanged={setAmount}
            />
            <ButtonStack buttons={actionButtons}/>
        </div>
    );
}
