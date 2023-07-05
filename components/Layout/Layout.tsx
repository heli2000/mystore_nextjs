import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
