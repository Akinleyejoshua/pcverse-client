import React, { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineUser, AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { HiOutlineCash, HiOutlineUser } from "react-icons/hi";
import { MdClose, MdOutlineDevices, MdOutlineMiscellaneousServices, MdOutlineDownloadForOffline, MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import { formatCash, get } from "../utils/helpers";

export const UserHeader: React.VFC = () => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const { user } = React.useContext(GlobalContext);

  const shortenName = (name:string) => {
    return (name.split(" ")[0] , name.split("_")[0] || name.split("-")[0])
  }

  useEffect(() => {
  }, []);

  return (
    <header className="user-header w-full text-white">
      <nav className="flex justify-between">
        {/* <h3>Home</h3> */}
        <p className="flex">
          Hello ❤️ <strong>{shortenName(user?.username)}</strong>
        </p>
        <div className="right flex justify-between">

          <button onClick={() => nav("/notifications")}>
            {
              ([user.notifications].map((items: any, i) => {
                return items.read ? <AiOutlineBell
                  className="icon" key={i}
                /> : <MdOutlineNotificationsActive className="icon blink" key={i}/>
              }))
            }

          </button>
          <button onClick={() => nav("/get-token")}>
            <HiOutlineCash className="icon" />
            <p className="ml-1">{formatCash(user.mcoin)}</p>
          </button>
          <button onClick={() => setOpen(true)}>
            <BiUserCircle className="icon user-icon" />
          </button>
        </div>
      </nav>

      <div
        className={`sm:hidden user-navbar flex flex-col justify-cent items-center ${open && "show"
          }`}
      >
        <MdClose
          className="icon absolute top-2 left-2"
          onClick={() => setOpen(false)}
        />
        <div className="top flex flex-col w-full">
          <AiOutlineUser className="user-icon" fontSize={50} />
          <p className="mt-2">Akinleye Joshua</p>
        </div>
        <div className="links w-full">
          <button
            className="flex items-center  w-full"
            onClick={() => nav("/dashboard")}
          >
            <AiOutlineDashboard className="icon" />
            <p>Dashboard</p>
          </button>
          <button
            className="flex items-center  w-full"
            onClick={() => nav("/devices")}
          >
            <MdOutlineDevices className="icon" />
            <p>Devices</p>
          </button>
          <button
            className="flex items-center  w-full"
            onClick={() => nav("/services")}
          >
            <MdOutlineMiscellaneousServices className="icon" />
            <p>Services</p>
          </button>
          <button
            className="flex items-center  w-full"
            onClick={() => nav("/downloads")}
          >
            <MdOutlineDownloadForOffline className="icon" />
            <p>Download</p>
          </button>
          <button
            className="flex items-center w-full"
            onClick={() => nav("/get-token")}
          >
            <HiOutlineCash className="icon" />
            <p>Get Token</p>
          </button>
        </div>
        <div className="actions w-full">
          <button
            className="flex items-center  w-full"
            onClick={() => nav("/edit-account")}
          >
            <HiOutlineUser className="icon" />
            <p>Account</p>
          </button>
          <button
            className="flex items-center  w-full"
            onClick={() => nav("/settings")}
          >
            <FcSettings className="icon" />
            <p>Settings</p>
          </button>
          <button
            className="flex items-center  w-full"
            onClick={() => nav("/signin")}
          >
            <AiOutlineLogout className="icon" />
            <p>Logout</p>
          </button>
        </div>
      </div>

    </header>
  );
};
