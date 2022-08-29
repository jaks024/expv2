import { ITag } from "../../interfaces/ITag";

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
