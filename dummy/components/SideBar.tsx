import React from "react";
import { AiOutlineUser, AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { HiOutlineCash } from "react-icons/hi";
import { MdOutlineDevices, MdOutlineMiscellaneousServices, MdOutlineDownloadForOffline, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router";

export const SideBar: React.FC = () => {
  const nav = useNavigate();

  return (
    <div className="sidebar flex flex-col justify-center items-center">
      <div className="top flex flex-col w-full">
        <AiOutlineUser className="user-icon" fontSize={50} />
        <p>Akinleye Joshua</p>
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
          className="flex items-center  w-full"
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
          <MdOutlineEdit className="icon" />
          <p>Edit Account</p>
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
  );
};
