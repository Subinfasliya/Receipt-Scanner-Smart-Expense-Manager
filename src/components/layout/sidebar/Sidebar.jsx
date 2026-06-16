import { BsHouseDoor } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
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
    end:'end',
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

const Sidebar = () => {
  return (
    <>
      <div className="p-6">
        <div className="flex flex-row items-center gap-3 mb-10">
          <img
            src="https://e7.pngegg.com/pngimages/880/128/png-clipart-scansource-imago-france-logo-point-of-sale-business-business-angle-text.png"
            alt=""
            className="max-h-[25px]"
          />
          <h2 className="text-2xl font-bold">ScanSpend</h2>
        </div>

        {/* Sidebar Buttons or Links */}
        <div className="space-y-5">
          {sidebarButtons.map((button) => (
            <SidebarButton
              key={button.title}
              title={button.title}
              icon={button.icon}
              path={button.path}
              end={button.end}
            />
          ))}

          <div className=" py-8 px-4 items-center gap-4 bg-[#EDE9FE] rounded-xl space-y-2">
            <div className="flex items-center space-x-3">
              <PiCrownLight size={20} />
              <p className="font-bold">Go Premium</p>
            </div>
            <p>Unlock advanced features, export reports and much more.</p>
            <div className="mt-5">
              <Link
                to="/premium"
                className="px-5 py-2 rounded-lg text-sm bg-[#7C3AED] text-white"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
};
export default Sidebar;
