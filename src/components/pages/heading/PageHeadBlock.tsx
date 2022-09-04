import "../../../styles/PageHeadBlock.css";
import { IPageHeadBlock } from "../../../interfaces/IPageHeadBlock";
import refreshIcon from "../../../icons/refresh.svg";

export function PageHeadBlock({name, month, year, isRefreshButtonEnabled: isFilterButtonEnabled} : IPageHeadBlock)
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
                <button onClick={() => alert("refresh")}>
                    <img src={refreshIcon} alt="refresh"/>
                </button>
            </div>
        </div>
    );
}
