import { INavButton } from "../../interfaces/INavButton";

export function NavButton({text, imageSrc, imageAlt} : INavButton)
{
    return (
        <div className="nav-btn">
            <div className="nav-btn-img-outer">
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className="nav-btn-text">
                {text}
            </div>
        </div>
    );
}
