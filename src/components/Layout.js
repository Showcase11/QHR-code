import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="grid-layout font-roboto">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
