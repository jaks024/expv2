import "../../styles/NavStack.css"
import { NavButton } from "./NavButton";
import icon from "../../logo.svg";

export function NavStack()
{
    return (
        <div className="nav-stack">
            <NavButton 
                text="Add"
                imageSrc={icon}
                imageAlt="Add"
                onClick={() => alert("add")}/>
            <NavButton 
                text="Summary"
                imageSrc={icon}
                imageAlt="Summary"
                onClick={() => alert("sum")}/>
            <NavButton 
                text="History"
                imageSrc={icon}
                imageAlt="History"
                onClick={() => alert("his")}/>
        </div>
    );
}
