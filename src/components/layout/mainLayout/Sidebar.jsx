
import { useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import { LuCalendarFold } from "react-icons/lu";
import { PiCrownLight } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import SidebarButton from "./SidebarButton";
import { Link } from "react-router";

const sidebarButtons = [
  {
    title: "Dashboard",
    icon: <BsHouseDoor size={20} />,
    path: "/app",
    end:true,
  },
  {
    title: "Expenses",
    icon: <LuCalendarFold size={20} />,
    path: "/app/expenses",
  },
  {
    title: "Analytics",
    icon: <VscGraph size={20} />,
    path: "/app/analytics",
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline size={20} />,
    path: "/app/settings",
  },
];

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full w-72 bg-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-6">

          {/* Brand */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <img
                src="https://e7.pngegg.com/pngimages/880/128/png-clipart-scansource-imago-france-logo-point-of-sale-business-business-angle-text.png"
                className="max-h-[25px]"
              />
              <h2 className="text-2xl font-bold">ScanSpend</h2>
            </div>

            <button
              className="md:hidden"
              onClick={() => setOpen(false)}
            >
              <IoClose size={22} />
            </button>
          </div>

          {/* Links */}
          <div className="space-y-5">
            {sidebarButtons.map((button) => (
              <div
                key={button.title}
                onClick={() => setOpen(false)}
              >
                <SidebarButton {...button} />
              </div>
            ))}

            {/* Premium */}
            <div className="py-8 px-4 bg-[#EDE9FE] rounded-xl mt-6">
              <div className="flex items-center space-x-3">
                <PiCrownLight size={20} />
                <p className="font-bold">Go Premium</p>
              </div>

              <p className="text-sm mt-2">
                Unlock advanced features and reports.
              </p>

              <Link
                to="/premium"
                className="block mt-3 px-5 py-2 bg-[#7C3AED] text-white rounded-lg text-sm"
              >
                Upgrade Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;