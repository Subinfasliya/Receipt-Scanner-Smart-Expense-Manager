// import { Outlet } from "react-router";
// import Sidebar from "./Sidebar";
// import Header from "./Header";


// const MainLayout = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-slate-50 flex">
//         {/* SideBar */}
//         <aside >
//           <Sidebar />
//         </aside>

//         {/* Content Area  or Header*/}
//         <div className="flex-1">
//           <header>
//             <Header />
//           </header>

//           <main className="p-6">
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };
// export default MainLayout;

import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}
      <aside>
        <Sidebar open={open} setOpen={setOpen} />
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Header gets control */}
        <Header setOpen={setOpen} />

        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;