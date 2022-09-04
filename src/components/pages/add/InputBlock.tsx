import { useState } from "react";
import { IButton } from "../../../interfaces/IButton";
import { IEntry } from "../../../interfaces/IEntry";
import { IInputBlock } from "../../../interfaces/IInputBlock";
import { ISelectableButton } from "../../../interfaces/ISelectableButton";
import { ButtonStack } from "../../generics/ButtonStack";
import { InputSelectField } from "./InputSelectField";
import { InputTextField } from "./InputTextField";

export function InputBlock({getNewEntryId, onAddNewEntry} : IInputBlock)
{
    const [year, setYear] = useState(2022);
    const [month, setMonth] = useState(1);
    const [day, setDay] = useState(1);
    const [vendor, setVendor] = useState("");
    const [location, setLocation] = useState("");
    const [amount, setAmount] = useState(0);
    const [tags, setTags] = useState("Any");
    const [notes, setNotes] = useState("");
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

    const setYearHandler = (value: any) => {
        if (!isNaN(+value)) {
            setYear(+value);
        }
    }

    const setMonthHandler = (value: any) => {
        if (!isNaN(+value)) {
            setMonth(+value);
        }
    }
    
    const setDayHandler = (value: any) => {
        if (!isNaN(+value)) {
            setDay(+value);
        }
    }

    const setAmountHandler = (value: any) => {
        console.log(value);
        if (!isNaN(+value)) {
            setAmount(+value);
        }
    }

    const IsEntryValid = () => {
        return vendor.length > 0 &&
            typeof(amount) === "number" &&
            amount > 0 &&
            typeof(year) === "number" &&
            year > 0 && 
            typeof(month) === "number" &&
            month > 0 && month <= 12 &&
            typeof(day) === "number" &&
            day > 0 && day <= 31 &&
            tags.trim().length > 0;
    }

    const onAddEntryHandler = () => {
        if (!IsEntryValid()) {
            return;
        }
        const entry : IEntry = {
            id: getNewEntryId(),  // need to change it to +1 of last highest id
            year: year,
            month: month,
            day: day,
            vendor: vendor,
            location: location,
            amount: amount,
            isExpense: isExpense,
            tags: tags,
            notes: notes
        };
        onAddNewEntry(entry);
    }

    const actionButtons: IButton[] = [
        {
            text: "Add New Entry",
            onClick: () => { onAddEntryHandler() }
        }
    ];

    return (
        <div className="input-block">
            <InputTextField 
                label="Year*"
                description="Which year was it?"
                onDataChanged={setYearHandler}
            />
            <InputTextField 
                label="Month*"
                description="Which month was it? (numbers only)"
                onDataChanged={setMonthHandler}
            />
            <InputTextField 
                label="Day*"
                description="Which day of the month was it?"
                onDataChanged={setDayHandler}
            />
            <InputTextField 
                label="Vendor*"
                description="Who gave/took it?"
                onDataChanged={setVendor}
            />
            <InputTextField 
                label="Location"
                description="Where did it happen?"
                onDataChanged={setLocation}
            />
            <InputTextField 
                label="Amount*"
                description="How much was it?"
                onDataChanged={setAmountHandler}
            />
            <InputSelectField buttons={categoryButton}/>
            <InputTextField 
                label="Tag(s)*"
                description="What categories does it go into? (Tags are delimited by space)"
                onDataChanged={setTags}
            />
            <InputTextField 
                label="Notes"
                description="Any extra details?"
                onDataChanged={setNotes}
            />
            <ButtonStack buttons={actionButtons}/>
        </div>
    );
}
