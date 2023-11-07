import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Slider from "./slider/Slider";

const Layout = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="container">
        <Menu />
        <main className="main-block">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
