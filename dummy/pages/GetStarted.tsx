import { SideBar } from "../components/SideBar"
import { UserHeader } from "../components/UserHeader"
import { BottomNav } from "../components/BottomNav"
import { useNavigate } from "react-router";
import { BiDevices } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export const GetStarted: React.VFC = () => {
    const nav = useNavigate();

    return <div className="getstarted-page flex flex-row w-full h-full text-white">
        <SideBar />
        <div className="App-User w-full h-full text-white">
            <UserHeader />
            <main className="flex-col text-left">
                <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col w-full">
                        <h2 className="flex justify-start w-full"><BsCashCoin className="icon" /> MCOIN</h2>
                        <p className="mt-2 m-left">MCOIN is a token used to perform tasks on this platform e.g removal of PC password will require an amount of
                            token.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-6">
                    <div className="flex flex-col w-full">
                        <h2 className="flex justify-start w-full"><BiDevices className="icon" /> DEVICES</h2>
                        <p className="mt-2 m-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam </p>
                    </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-6">
                    <div className="flex flex-col w-full">
                        <h2 className="flex justify-start w-full"><MdOutlineMiscellaneousServices className="icon" /> SERVICES</h2>
                        <p className="mt-2 m-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        </p>

                        <button className="styled-button m-left mt-6 flex" onClick={() => nav("/services")}>
                            our services

                            <div className="material-icons">arrow_right</div>
                        </button>
                        <h1 className="m-left mt-6">Enjoy!!!</h1>

                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    </div>
}