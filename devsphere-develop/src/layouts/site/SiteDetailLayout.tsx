import { Outlet } from "react-router-dom";
import "./style.css";
import React from "react";

const SiteDetailLayout = React.memo(() => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 py-2 gap-6">
      <div className="hidden md:block sticky top-16 left-0 max-h-[82vh] overflow-y-auto bg-yellow-50">
        <div>test</div>
      </div>
      <div className="col-span-3 min-h-[68vh] bg-cyan-50">
        <div className="px-4 py-2 md:px-2 md:py-1 xl:p-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
});

export default SiteDetailLayout;
