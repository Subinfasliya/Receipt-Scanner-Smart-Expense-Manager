import { NavLink } from "react-router";

const SidebarButton = ({ title, icon, path }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `py-3 px-4 flex rounded-xl items-center gap-4 ${isActive ? "bg-[#7C3AED] text-white" : "hover:bg-[#EDE9FE]"}`
        }
        to={path}
      >
        {icon}
        <p>{title}</p>
      </NavLink>
    </>
  );
};
export default SidebarButton;
