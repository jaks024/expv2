import { PageHeadBlock } from "../heading/PageHeadBlock";

export function SettingPage() {
    return (
        <div className="page">
            <PageHeadBlock 
                name="Settings"
                month=""
                year=""
                isRefreshButtonEnabled={false}
            />
        </div>
    );
}
