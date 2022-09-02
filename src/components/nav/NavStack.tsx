import "../../styles/NavStack.css"
import { NavButton } from "./NavButton";
import addIcon from "../../icons/add.svg";
import summaryIcon from "../../icons/home.svg";
import historyIcon from "../../icons/history.svg";
import settingIcon from "../../icons/setting.svg";
import { INavStack } from "../../interfaces/INavStack";

export function NavStack({ onClickAddPage, onClickSummaryPage, onClickHistoryPage, onClickSettingPage} : INavStack)
{
    return (
        <div className="nav-stack">
            <NavButton 
                text="Add"
                imageSrc={addIcon}
                imageAlt="Add"
                onClick={onClickAddPage}/>
            <NavButton 
                text="Summary"
                imageSrc={summaryIcon}
                imageAlt="Summary"
                onClick={onClickSummaryPage}/>
            <NavButton 
                text="History"
                imageSrc={historyIcon}
                imageAlt="History"
                onClick={onClickHistoryPage}/>
            <NavButton 
                text="Setting"
                imageSrc={settingIcon}
                imageAlt="Setting"
                onClick={onClickSettingPage}/>
        </div>
    );
}
