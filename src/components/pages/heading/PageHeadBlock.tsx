import "../../../styles/PageHeadBlock.css";
import { IPageHeadBlock } from "../../../interfaces/IPageHeadBlock";
import menuIcon from "../../../icons/menu.svg";

export function PageHeadBlock({name, month, year, isFilterButtonEnabled} : IPageHeadBlock)
{
    return (
        <div className="page-head-block">
            <div className="page-head-texts">
                <span className="page-head-title">{name}</span>
                <div className="page-head-date">
                    <span>{month}</span>
                    <span>{year}</span>
                </div>
            </div>
            <div className="page-head-btn" style={{display: isFilterButtonEnabled ? "block" : "none"}}>
                <button onClick={() => alert("filter")}>
                    <img src={menuIcon} alt="filter"/>
                </button>
            </div>
        </div>
    );
}
