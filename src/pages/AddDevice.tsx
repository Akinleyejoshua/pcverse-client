import { SideBar } from "../components/SideBar";
import { UserHeader } from "../components/UserHeader";
import { BottomNav } from "../components/BottomNav";

import { Form } from "../components/Form";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { BiDesktop, BiDevices, BiUserCircle, BiReset } from "react-icons/bi";
import { HiOutlineEyeOff, HiStatusOnline } from "react-icons/hi";
import { MdOutlineCreate } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router";

export const AddDevice: React.VFC = () => {

  const { formData, devices, handleDevice, addNewDevice, autoAddDevice } = useContext(GlobalContext);

  const { serial }: any = useParams();


  useEffect(() => {
    // console.log(devices)
    serial && handleDevice(serial, "serial")
  }, [serial])

  const [showDevices, setShowDevices] = useState(false);

  const [openAccordion, setOpenAccordion] = useState({
    id: "",
    open: true,
    prev: [],
  });

  const openAccPanel = (event: any, id: any) => {
    setOpenAccordion({
      ...openAccordion,
      id: event.target.id,
    });

    !(id == openAccordion.id)
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
            className={`flex flex-col h-full w-full ${!showDevices ? "width-full" : "width-none"
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
                {/* <button className="btn" onClick={autoAddDevice}>
                  <MdOutlineAutoAwesomeMotion className="icon" />
                  <p>Auto Detect</p>
                </button> */}
              </div>

              <div className="flex flex-col mt-6">
                <div
                  className={`flex justify-center mb-6 text-center small toast ${formData.error
                    ? `h-max-content width-full p-2 ${formData.errorType}`
                    : "width-none h-none"
                    }`}
                >
                  {formData.errorMsg}
                </div>
                <Form
                  id="add-device"
                  submit={() => { }}
                  children={
                    <>
                      <div className="input-bar">
                        <BiDesktop className="icon" />
                        <input type="text" placeholder="PC-NAME" onChange={event => handleDevice(event.target.value, "pcName")} />
                      </div>
                      <div className="input-bar">
                        <BiDevices className="icon" />
                        {/* <input type="text" placeholder="PC-OS" /> */}
                        <select name="pc-os" onChange={event => handleDevice(event.target.value, "platform")}>
                          <option></option>
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
                      
                        <input type="text" placeholder="SERIAL-NO or ID" value={serial && serial} onChange={event => handleDevice(event.target.value, "serial")} />
                      </div>
                      <div className="input-bar">
                        <BiUserCircle className="icon" />
                        <input type="text" placeholder="PC-USER" onChange={event => handleDevice(event.target.value, "pcUser")} />
                      </div>
                      <button onClick={addNewDevice}>
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
            className={`flex flex-col h-full w-full devices ${showDevices ? "width-full" : "width-none"
              }`}
          >
            <button
              onClick={() => setShowDevices(false)}
              className="self-start mb-3"
            >
              <HiOutlineEyeOff className="icon" />
              <p>Hide Devices</p>
            </button>

            {
              !(Object.keys(devices.items).length === 0) ? devices.items.map((item: any, i) => {
                return <div className="accordion rfc item w-full mt-0" key={i}
                  id={`${i}`}
                // onClick={(event) => openAccPanel(event, i)}
                >
                  <div
                    className="flex flex-row justify-between align-items btn"
                    id={`${i}`}
                    onClick={(event) => openAccPanel(event, i)}
                  >
                    <div className="flex flex-col">
                      <BiDesktop className="icon" />
                      <p className="small">{item?.pcName}</p>
                    </div>
                    <div className="flex flex-col">
                      <BiDevices className="icon" />
                      <p>{item?.platform}</p>
                    </div>
                    <div className="flex flex-col">
                      <RiNumbersFill className="icon" />
                      <p>{item?.serialnumber}</p>
                    </div>
                    <div className="flex flex-col">
                      <BiUserCircle className="icon" />
                      <p>{item?.pcUser}</p>
                    </div>
                  </div>
                  <div
                    className={`panel ${openAccordion.open && openAccordion.id === `${i}`
                      ? "h-full"
                      : "h-none"
                      }`}
                  >
                    <div className="actions pt-2 flex w-full justify-between">
                      <div className="flex">
                        <button className="m-left btn">
                          <AiOutlineDelete className="icon" />
                          <p>Delete</p>
                        </button>

                        <button className="m-left btn">
                          <BiReset className="icon" />
                          <p>One-Tap Reset</p>
                        </button>
                      </div>

                      <div className="flex m-right">
                        <button className="m-left btn">
                          <HiStatusOnline className="icon dim" />
                          <p>Offline</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              }) : <p className="mt-6">Register your first device</p>
            }

          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
};
