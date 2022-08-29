import { NavButton } from "./NavButton";

export function NavStack()
{
    return (
        <div className="nav-stack">
            <NavButton 
                text="Add"
                imageSrc=""
                imageAlt="Add"/>
            <NavButton 
                text="Summary"
                imageSrc=""
                imageAlt="Summary"/>
            <NavButton 
                text="History"
                imageSrc=""
                imageAlt="History"/>
        </div>
    );
}
