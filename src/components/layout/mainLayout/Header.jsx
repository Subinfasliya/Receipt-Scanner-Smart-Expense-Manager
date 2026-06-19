import { Link, useMatches, useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const matches = useMatches();

  const currentMach = matches[matches.length - 1];

  const title = currentMach?.handle?.title || "";
  const subtitle = currentMach?.handle?.subtitle || "";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="h-20 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-between px-6">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <span>
            {subtitle === "Welcome Back"
              ? `${subtitle}, ${user.name}`
              : subtitle}
          </span>
        </div>

        <div className="flex gap-4 ">
          <Link to={"/profile"}>
            <div className="flex gap-4 items-center">
              <div className="rounded-full w-12 h-12 flex justify-center items-center text-center bg-[#EDE9FE] text-[#7C3AED] font-bold">
                <p>SU</p>
              </div>
              <p>{user.name}</p>
            </div>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};
export default Header;
