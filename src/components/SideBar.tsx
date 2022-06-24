import React from "react";
import { AiOutlineUser, AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { HiOutlineCash, HiOutlineUser } from "react-icons/hi";
import { MdOutlineDevices, MdOutlineMiscellaneousServices, MdOutlineDownloadForOffline, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import { clearStorage } from "../utils/helpers";

export const SideBar: React.FC = () => {
  const nav = useNavigate();
  const { user, clearAuth } = React.useContext(GlobalContext);

  return (
    <div className="sidebar flex flex-col justify-center items-center">
      <div className="top flex flex-col w-full">
        {/* <AiOutlineUser className="user-icon" fontSize={50} /> */}
        <div className="user-icon flex items-center justify-center">
          <h1>{user?.username?.charAt(0)}</h1>
        </div>
        <p>{user?.username}</p>
      </div>
      <div className="links w-full">
        <button
          className="flex items-center  w-full btn"
          onClick={() => nav("/dashboard")}
        >
          <AiOutlineDashboard className="icon" />
          <p>Dashboard</p>
        </button>
        <button
          className="flex items-center  w-full btn"
          onClick={() => nav("/devices")}
        >
          <MdOutlineDevices className="icon" />
          <p>Devices</p>
        </button>
        <button
          className="flex items-center  w-full btn"
          onClick={() => nav("/services")}
        >
          <MdOutlineMiscellaneousServices className="icon" />
          <p>Services</p>
        </button>
        <button
          className="flex items-center  w-full btn"
          onClick={() => nav("/downloads")}
        >
          <MdOutlineDownloadForOffline className="icon" />
          <p>Download</p>
        </button>
        <button
          className="flex items-center  w-full btn"
          onClick={() => nav("/get-token")}
        >
          <HiOutlineCash className="icon" />
          <p>Get Token</p>
        </button>
      </div>
      <div className="actions w-full">
        <button
          className="flex items-center  w-full btn"
          onClick={() => nav("/edit-account")}
        >
          <HiOutlineUser className="icon" />
          <p>Account</p>
        </button>
        <button
          className="flex items-center  w-full btn"
          onClick={() => nav("/settings")}
        >
          <FcSettings className="icon" />
          <p>Settings</p>
        </button>
        <button
          className="flex items-center btn w-full"
          onClick={() => {
            clearAuth();
            nav("/signin");
          }}
        >
          <AiOutlineLogout className="icon" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};
