import { SideBar } from "../components/SideBar";
import { UserHeader } from "../components/UserHeader";
import { BottomNav } from "../components/BottomNav";

import { Form } from "../components/Form";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { BiDesktop, BiDevices, BiUserCircle, BiReset } from "react-icons/bi";
import { HiOutlineEyeOff, HiStatusOnline } from "react-icons/hi";
import { MdOutlineAutoAwesomeMotion, MdOutlineCreate } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";

export const AddDevice: React.VFC = () => {
  const [showDevices, setShowDevices] = useState(false);

  const [openAccordion, setOpenAccordion] = useState({
    id: "",
    open: true,
    prev: [],
  });

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
    <div className="add-device flex flex-row w-full h-full text-white">
      <SideBar />
      <div className="App-User w-full h-full text-white">
        <UserHeader />
        <main className="flex flex-row justify-between">
          <div
            className={`flex flex-col h-full w-full ${
              !showDevices ? "width-full" : "width-none"
            }`}
          >
            <div className="heading-action flex flex-col text-center mt-6">
              <h3>Connect your device</h3>
              <p>Start reseting your passwords in no time</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full actions mt-6">
              <div className="grid w-max-content m-auto">
                <button onClick={() => setShowDevices(true)}>
                  <AiOutlineEye className="icon" />
                  <p>View Devices</p>
                </button>
                <button>
                  <MdOutlineAutoAwesomeMotion className="icon" />
                  <p>Auto Detect</p>
                </button>
              </div>

              <div className="flex flex-col mt-6">
                <Form
                  id="add-device"
                  submit={() => {}}
                  children={
                    <>
                      <div className="input-bar">
                        <BiDesktop className="icon" />
                        <input type="text" placeholder="PC-NAME" />
                      </div>
                      <div className="input-bar">
                        <BiDevices className="icon" />
                        {/* <input type="text" placeholder="PC-OS" /> */}
                        <select name="pc-os">
                          <option>Win 11</option>
                          <option>Win 10</option>
                          <option>Win 7</option>
                          <option>Mac Book</option>
                          <option>Linux</option>
                          <option>Android</option>
                          <option>iPhone</option>
                        </select>
                      </div>
                      <div className="input-bar">
                        <RiNumbersFill className="icon" />
                        <input type="number" placeholder="PC-SERIAL-NUMBER" />
                      </div>
                      <div className="input-bar">
                        <BiUserCircle className="icon" />
                        <input type="number" placeholder="PC-USER" />
                      </div>
                      <button>
                        <MdOutlineCreate className="icon" />
                        <p>Add</p>
                      </button>
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col h-full w-full devices ${
              showDevices ? "width-full" : "width-none"
            }`}
          >
            <button
              onClick={() => setShowDevices(false)}
              className="self-start"
            >
              <HiOutlineEyeOff className="icon" />
              <p>Hide Devices</p>
            </button>
            <div
              className="accordion item w-full mt-6"
            >
              <div className="flex flex-row justify-between align-items btn"
              id="0"
              onClick={(event) => openAccPanel(event, "0")}
              >
                <div className="flex flex-col">
                  <BiDesktop className="icon" />
                  <p className="small">PC-124353</p>
                </div>
                <div className="flex flex-col">
                  <BiDevices className="icon" />
                  <p>Mac</p>
                </div>
                <div className="flex flex-col">
                  <RiNumbersFill className="icon" />
                  <p>123434345</p>
                </div>
                <div className="flex flex-col">
                  <BiUserCircle className="icon" />
                  <p>Akinleye Joshua</p>
                </div>
              </div>
              <div
                className={`panel ${
                  openAccordion.open && openAccordion.id === "0"
                    ? "h-full"
                    : "h-none"
                }`}
              >
                <div className="actions pt-2 flex w-full justify-between">
                  <div className="flex">
                    <button className="m-left">
                      <AiOutlineDelete className="icon" />
                      <p>Delete</p>
                    </button>

                    <button className="m-left">
                      <BiReset className="icon" />
                      <p>One-Tap Action</p>
                    </button>
                  </div>

                  <div className="flex m-right">
                    <button className="m-left">
                      <HiStatusOnline className="icon dim" />
                      <p>Offline</p>
                    </button>
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
