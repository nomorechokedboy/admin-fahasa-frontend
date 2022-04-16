import CTA from "@/components/CTA";
import { DASHBOARD } from "@/configs";
import { GiOpenTreasureChest } from "react-icons/gi";
import { useNavigate } from "react-router";

interface ErrorPageProps {}

export default function ErrorPage({}: ErrorPageProps) {
    const redirect = useNavigate();
    const handleBackToMain = () => {
        redirect(DASHBOARD);
    };
    return (
        <div>
            <CTA
                message="You've found a secret page on our service. Unfortunately, this is a 404 error page"
                icon={<GiOpenTreasureChest />}
                label="Back to main"
                title="Error 404 - Not Found!"
                onClick={handleBackToMain}
            />
        </div>
    );
}
