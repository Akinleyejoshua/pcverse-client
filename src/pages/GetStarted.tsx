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
                            The devices are registered has PCs platforms on our server. This is because, using any of our services on your
                            devices requires authentication has a two-factor-auth. this helps us to protect intruders from trying to use our service against you. for instance
                            if your device is registered on our server and a person tries to use our platform on an account that's not yours to hack into your PC, the intelligent system will FLAG that person by
                            data of the person & will notify you & you will be given the power to enable the user use the service should incase it was probably someone you knew trying to help you out & you are fully aware!.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-6">
                    <div className="flex flex-col w-full">
                        <h2 className="flex justify-start w-full"><MdOutlineMiscellaneousServices className="icon" /> SERVICES</h2>
                        <p className="mt-2 m-left">
                            We offer spontaneouse range of services which would make life more easier for PC users. Has though we build softwares that help get the
                            JOBs faster. We know that Reseting a PC most time has caused alot of PC owners and users reset their entier operating system but this platform
                            helps you to reset without reinstalling your OS or Reseting your OS or System Restores and many other operation. This is just a one-click software!.
                            we look foward to exetending our services to many range of products has we grow and research more!
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