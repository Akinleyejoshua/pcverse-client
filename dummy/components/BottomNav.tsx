import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { MdOutlineComputer } from "react-icons/md";
import { useNavigate } from "react-router";

export const BottomNav: React.VFC = () => {
    const nav = useNavigate();

    return <div className="bottom-nav">
        <div className="label-btn btn" onClick={() => nav("/dashboard")}>
            <AiOutlineDashboard className="icon" />
            <p>Dashboard</p>
        </div>
        <div className="label-btn btn" onClick={() => nav("/devices")}>
            <MdOutlineComputer className="icon" />
            <p>Devices</p>
        </div>

        <div className="label-btn btn" onClick={() => nav("/get-token")}>
            <HiOutlineCash className="icon"/>
            <p>Get Token</p>
        </div>
    </div>
}