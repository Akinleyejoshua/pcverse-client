import React, { useContext, useEffect } from "react";
import { SideBar } from "../components/SideBar";
import { UserHeader } from "../components/UserHeader";
import { BottomNav } from "../components/BottomNav";
import { useNavigate } from "react-router";
import { CgDanger } from "react-icons/cg";
import { HiOutlineCash } from "react-icons/hi";
import { MdOutlineDevices } from "react-icons/md";
import { Loader } from "../components/Loader";
import { GlobalContext } from "../context/GlobalContext";
import { formatCash } from "../utils/helpers";
import { Prompt } from "../components/Prompt";

export const Dashboard: React.VFC = () => {
    const nav = useNavigate();

    const { user, devices } = useContext(GlobalContext);
    useEffect(() => {
        // console.log(user)

    }, [user.loading])

    return <div className="flex flex-row w-full h-full text-white">
        {user.loading && <Loader />}
        {<Prompt show={false} question="Are you sure you want to delete this device" callback={() => alert("prompted")} id="info" />}

        <SideBar />
        <div className="App-User w-full h-full text-white">

            <UserHeader />
            <main className="flex-col loading-state">

                <div className="metrics w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                        <div className="item">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col justify-between">
                                    <HiOutlineCash className="icon" />
                                    <p className="mt-2 mb-2">mcoin</p>
                                    {/* <p>token</p> */}
                                </div>
                                <h1>{formatCash(user.mcoin)}</h1>
                            </div>
                            <button onClick={() => nav("/get-token")} className="items-center"><i className="material-icons mr-2">add</i> {(user?.mcoin == "0") ? "Get NEW MC" : "Add more"}</button>
                        </div>
                        <div className="item">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col justify-between">
                                    <MdOutlineDevices className="icon" />
                                    <p className="mt-2 mb-2">connected devices</p>
                                </div>
                                <h1>{!(Object.keys(devices.items).length === 1) ? Object.keys(devices.items).length : 0}</h1>
                            </div>
                            <button onClick={() => nav("/devices")} className="items-center"><i className="material-icons mr-2">add</i> {(Object.keys(devices.items).length === 0) ? "ADD NEW DEVICE" : "Add more"}</button>
                        </div>
                        <div className="item">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col justify-between">
                                    <CgDanger className="icon" />
                                    <p className="mt-2 mb-2">Intruders</p>
                                </div>
                                <h1>0</h1>
                            </div>
                            <button className="items-center"><i className="material-icons mr-2">check</i>Verify</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-3 w-full h-full">
                    <button className="getstarted-btn w-full flex justify-between" onClick={() => nav("/get-started")}> Get Started <i className="material-icons">arrow_right</i></button>
                </div>
            </main>
            <BottomNav />
        </div>

    </div>
}