import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const APPLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the content of the active route */}
      <Footer />
    </>
  );
};

export default APPLayout;
