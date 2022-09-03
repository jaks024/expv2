import { TagStack } from "../../generics/TagStack";
import { InputTextField } from "./InputTextField";

export function InputTagField()
{

    const onTagEntered = (event: any) => {
        alert(event.target.value);
        alert(event.key === "Enter");
    }

    return (
        <div>
            <InputTextField 
                label="Tags"
                onDataChanged={onTagEntered}/>
            <TagStack /> 
        </div>
    );
}
