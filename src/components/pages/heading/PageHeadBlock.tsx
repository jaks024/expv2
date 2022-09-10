import "../../../styles/PageHeadBlock.css";
import { IPageHeadBlock } from "../../../interfaces/IPageHeadBlock";
import refreshIcon from "../../../icons/refresh.svg";

export function PageHeadBlock({name, month, year, isRefreshButtonEnabled, onRefresh} : IPageHeadBlock)
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
            <div className="page-head-btn" style={{display: isRefreshButtonEnabled ? "block" : "none"}}>
                <button onClick={() => {if (onRefresh != null) onRefresh(); }}>
                    <img src={refreshIcon} alt="refresh"/>
                </button>
            </div>
        </div>
    );
}
