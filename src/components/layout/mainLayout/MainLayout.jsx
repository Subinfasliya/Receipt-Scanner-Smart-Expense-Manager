import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";


const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex">
        {/* SideBar */}
        <aside className="w-64 bg-white border-r border-slate-200">
          <Sidebar />
        </aside>

        {/* Content Area  or Header*/}
        <div className="flex-1">
          <header>
            <Header />
          </header>

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default MainLayout;
