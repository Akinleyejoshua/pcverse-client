import React from "react";
import { SideBar } from "../components/SideBar";
import { UserHeader } from "../components/UserHeader";
import { BottomNav } from "../components/BottomNav";
import { useNavigate } from "react-router";
import { CgDanger } from "react-icons/cg";
import { HiOutlineCash } from "react-icons/hi";
import { MdOutlineDevices } from "react-icons/md";

export const Dashboard: React.VFC = () => {
    const nav = useNavigate();

    return <div className="flex flex-row w-full h-full text-white">
        <SideBar />

        <div className="App-User w-full h-full text-white">
            <UserHeader />
            <main className="flex-col">
                <div className="metrics w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                        <div className="item">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col justify-between">
                                    <HiOutlineCash className="icon" />
                                    <p className="mt-2 mb-2">mcoin</p>
                                    {/* <p>token</p> */}
                                </div>
                                <h1>6</h1>
                            </div>
                            <button onClick={() => nav("/get-token")} className="items-center"><i className="material-icons">add</i>get more</button>
                        </div>
                        <div className="item">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col justify-between">
                                    <MdOutlineDevices className="icon" />
                                    <p className="mt-2 mb-2">connected devices</p>
                                </div>
                                <h1>0</h1>
                            </div>
                            <button onClick={() => nav("/devices")} className="items-center"><i className="material-icons">add</i>Add more</button>
                        </div>
                        <div className="item">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col justify-between">
                                    <CgDanger className="icon" />
                                    <p className="mt-2 mb-2">Intruders</p>
                                </div>
                                <h1>0</h1>
                            </div>
                            <button className="items-center"><i className="material-icons">check</i>Verify</button>
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