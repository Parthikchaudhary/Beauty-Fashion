import { Outlet } from "react-router-dom";
import { Footer } from "./Footer"
import { Navbar } from "./Navbar";

const APPLayout = () => {
    return <>
    <Navbar/>
    <Outlet/>
    <Footer />
    </>
}
export default APPLayout;