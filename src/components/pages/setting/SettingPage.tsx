import { PageHeadBlock } from "../heading/PageHeadBlock";

export function SettingPage() {
    return (
        <div className="page">
            <PageHeadBlock 
                name="Setting"
                month="Jan"
                year="2022"
                isFilterButtonEnabled={false}
            />
        </div>
    );
}
