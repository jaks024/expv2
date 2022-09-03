import { ITag } from "../../interfaces/ITag";
import "../../styles/Tag.css"

export function Tag({name, color} : ITag) {

    const style = {
        background: color
    };

    return (
        <div className="tag" style={style}>
            {name}
        </div>
    );
}
