import { ILoadingBlocker } from "../../interfaces/ILoadingBlocker";
import "../../styles/LoadingBlocker.css"

export function LoadingBlocker({loadingText, isLoading} : ILoadingBlocker) {
    return (
        <div className={`loading-blocker ${isLoading ? "loading-blocker-enabled" : ""}`}>
            <div className="loading-blocker-text">
                {loadingText}
            </div>
        </div>
    );
}