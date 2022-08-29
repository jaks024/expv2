import { IPageHeadBlock } from "../../../interfaces/IPageHeadBlock";

export function PageHeadBlock({name, month, year} : IPageHeadBlock)
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
            <div className="page-head-btn">
                <button title="Filter"
                    onClick={() => alert("filter")}/>
            </div>
        </div>
    );
}
