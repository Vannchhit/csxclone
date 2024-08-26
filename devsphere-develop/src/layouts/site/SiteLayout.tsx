import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import React from "react";
const SiteLayout = React.memo(() => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
});

export default SiteLayout;
