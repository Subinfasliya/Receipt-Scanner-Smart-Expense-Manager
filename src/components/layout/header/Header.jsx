import { Link, useMatches } from "react-router";

const Header = () => {
  // Static user data for get name purpose
  const user = {
    name: "Subin",
  };

  const matches = useMatches();

  const currentMach = matches[matches.length - 1];

  const title = currentMach?.handle?.title || "";
  const subtitle = currentMach?.handle?.subtitle || "";

  

  return (
    <>
      <div className="h-20 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-between px-6">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <span>{subtitle === "Welcome Back" ? `${subtitle}, ${user.name}` : subtitle}</span>
        </div>

        <Link to={"/profile"}>
          <div className="flex gap-4 items-center">
            <div className="rounded-full w-12 h-12 flex justify-center items-center text-center bg-[#EDE9FE] text-[#7C3AED] font-bold">
              <p>SU</p>
            </div>
            <p>{user.name}</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Header;
