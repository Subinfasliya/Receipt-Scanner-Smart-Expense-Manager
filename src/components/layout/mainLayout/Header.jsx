// import { Link, useMatches, useNavigate } from "react-router";
// import { useAuth } from "../../../context/AuthContext";

// const Header = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const matches = useMatches();

//   const currentMach = matches[matches.length - 1];

//   const title = currentMach?.handle?.title || "";
//   const subtitle = currentMach?.handle?.subtitle || "";

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <>
//       <div className="h-20 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-between px-6">
//         <div>
//           <h2 className="text-xl font-bold">{title}</h2>
//           <span>
//             {subtitle === "Welcome Back"
//               ? `${subtitle}, ${user.name}`
//               : subtitle}
//           </span>
//         </div>

//         <div className="flex gap-4 ">
//           <Link to={"/profile"}>
//             <div className="flex gap-4 items-center">
//               <div className="rounded-full w-12 h-12 flex justify-center items-center text-center bg-[#EDE9FE] text-[#7C3AED] font-bold">
//                 <p>SU</p>
//               </div>
//               <p>{user.name}</p>
//             </div>
//           </Link>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Header;

import { Link, useMatches, useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import { BsList } from "react-icons/bs";

const Header = ({ setOpen }) => {
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
    <div className="h-20 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-between px-4 md:px-6">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          <BsList size={24} />
        </button>

        {/* Title Section */}
        <div>
          <h2 className="text-xl font-bold">{title}</h2>

          <span className="text-sm text-gray-500">
            {subtitle === "Welcome Back"
              ? `${subtitle}, ${user.name}`
              : subtitle}
          </span>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex gap-4 items-center">

        <Link to={"/profile"}>
          <div className="flex gap-3 items-center">

            <div className="rounded-full w-10 h-10 flex justify-center items-center bg-[#EDE9FE] text-[#7C3AED] font-bold">
              <p>
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </p>
            </div>

            <p className="hidden sm:block">
              {user.name}
            </p>

          </div>
        </Link>

        <button
          onClick={handleLogout}
          className="text-sm px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Header;