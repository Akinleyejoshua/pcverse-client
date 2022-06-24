import { SideBar } from "../components/SideBar";
import { UserHeader } from "../components/UserHeader";
import { BottomNav } from "../components/BottomNav";
import React, { useState } from "react";

import { useNavigate } from "react-router";
import { BiKey, BiArrowBack } from "react-icons/bi";
import { BsMicrosoft } from "react-icons/bs";
import { MdOutlinePassword } from "react-icons/md";

export const Services: React.VFC = () => {
    const [showHelp, setShowHelp] = useState(false);
    const [openAccordion, setOpenAccordion] = useState({
        id: "",
        open: true,
        prev: [],
    });

    const nav = useNavigate();

    const openAccPanel = (event: any, id: string) => {

        !(id === openAccordion.id)
            ? setOpenAccordion({
                ...openAccordion,
                id: event.target.id,
                open: openAccordion.open,
            })
            : setOpenAccordion({
                ...openAccordion,
                id: event.target.id,
                open: !openAccordion.open,
            });


    };

    return (
        <div className="services flex flex-row w-full h-full text-white">
            <SideBar />
            <div className="App-User w-full h-full text-white">
                <UserHeader />
                <main className="flex flex-row justify-between">
                    <div
                        className={`flex flex-col h-full w-full ${!showHelp ? "width-full" : "width-none"
                            }`}
                    >
                        <div className="heading-action flex flex-col text-center mt-6">
                            <h3>Services</h3>
                        </div>
                        <div className="grid mt-6">
                            <div className="item flex flex-col m-left">
                                <div className="flex flex-row justify-between">
                                    <div className="blue-glassmorphism m-top">
                                        <MdOutlinePassword className="icon flex-start" />
                                    </div>
                                    <div className="flex flex-col align-start ml-2">
                                        <h2 className="self-start">Password Reset</h2>
                                        <p className="self-start">
                                            We have built a software that will assit in reseting you
                                            PC password in no-time
                                        </p>
                                        <button
                                            onClick={() => setShowHelp(true)}
                                            className="styled-button mt-2 m-left"
                                        >
                                            Reset now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item flex flex-col m-left">
                                <div className="flex flex-row justify-between relative">
                                    <div className="blue-glassmorphism m-top">
                                        <BiKey className="icon flex-start " />
                                        <BsMicrosoft className="absolute left-2 top-2" />
                                    </div>

                                    <div className="flex flex-col align-start ml-2">
                                        <h2 className="self-start">Windows Activation</h2>
                                        <p className="self-start">
                                            We Have Softwares that help to Activate your PC
                                        </p>
                                        <button className="styled-button mt-2 m-left">
                                            Activate now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 w-full text-center">
                                <p className="blink">
                                    More Awesome Services Coming Soon, Stay tuned!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`help flex flex-col h-full w-full devices ${showHelp ? "width-full" : "width-none"
                            }`}
                    >
                        <button onClick={() => setShowHelp(false)} className="self-start">
                            <BiArrowBack className="icon" />
                            <p>Back</p>
                        </button>

                        <div className="section w-full mt-6">
                            <div className="heading-action flex flex-col text-center">
                                <h1>CONFIGURATIONS</h1>
                                <p className="small">
                                    Carefully follow the process of usage of this service, this
                                    process is only configured once for your platform. the reason
                                    for this config is due to some of the limitations your
                                    platforms has been configured on, therefore this process
                                    bypasses those configuration to make the processess more easier and enable results.
                                </p>
                            </div>

                            <div className="flex-col justify-between mt-6 w-full">
                                <div className="accordion w-full">
                                    <button
                                        id="0"
                                        onClick={(event) => openAccPanel(event, "0")}
                                        className="accordion-name cursor-pointer flex justify-between items-center
                                "
                                    >
                                        Password Reset{" "}
                                        <i className="material-icons">
                                            {openAccordion.open && openAccordion.id === "0"
                                                ? "remove"
                                                : "add"}
                                        </i>
                                    </button>
                                    <div
                                        className={`panel ${openAccordion.open && openAccordion.id === "0"
                                            ? "h-full"
                                            : "h-none"
                                            }`}
                                    >
                                        <ol className="">
                                            <li>Add your PC device on our server</li>
                                            <ol>
                                                <li>Add your PC-NAME</li>
                                                <li>Add your PC-ID or SERIAL-NUMBER (Most Important)</li>
                                                <li>Select your PC-PLATFORM (Win/Mac/Android/iOS)</li>
                                                <li>Add the PC-USER account</li>
                                            </ol>
                                            <button className="cursor-pointer" onClick={() => nav("/devices")}>Add device by clicking here</button>
                                            <li>Download the setup package for your PC/Platform</li>
                                            <button className="cursor-pointer" onClick={() => nav("/downloads")}>Download by clicking here</button>
                                            <li>Get A healthy & working USB Drive, Extract the packages into the root of the drive</li>
                                            <li>Restart the system & boot from the flash drive from the PC boot menu: this is applicable to
                                                PC users who dont have access into their user account
                                            </li>
                                            <li>After it has loaded completely, continue to the operating system. do not try any other option
                                                if you dont know what you are doing.
                                            </li>
                                            <li>Keep the Drive still mounted into the PC USB port</li>
                                            <li>After the windows startup on the lock menu, Our Setup interface should be displayed if you followed
                                                the process appropriately & according to your PC specifications also.
                                            </li>
                                            <li>You must have an internet connection to be able to login into your account</li>
                                            <li>Navigate to the service section and select 'RESET PASSWORD'</li>
                                            <li>Kindly be patient has the Software RESETS YOUR PASSWORD & REBOOTS your system</li>
                                            <li>After a successful reboot, Woah!!!, your forgotten password is being removed!. enjoy</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="accordion w-full mt-2 mb-2">
                                    <button
                                        id="1"
                                        onClick={(event) => openAccPanel(event, "1")}
                                        className="accordion-name cursor-pointer flex justify-between items-center"
                                    >
                                        Windows Activation
                                        <i className="material-icons">
                                            {openAccordion.open && openAccordion.id === "1"
                                                ? "remove"
                                                : "add"}
                                        </i>
                                    </button>
                                    <div
                                        className={`panel ${openAccordion.open && openAccordion.id === "1"
                                            ? "h-full"
                                            : "h-none"
                                            }`}
                                    >
                                        <ol>
                                            <li>Not Available yet, kindly stay in touch</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <BottomNav />
            </div>
        </div>
    );
};
