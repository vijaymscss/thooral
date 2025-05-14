import React, { type PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
      <Header />
      <main className='min-h-screen container min-auto px-4 py-8'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
