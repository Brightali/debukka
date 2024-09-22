import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Layout = () => {
  const { cartOpen } = useContext(AppContext);

  const location = useLocation();
  const hideNavbarPaths = [""];
  return (
    <div className="lightscheme">
      {!hideNavbarPaths.includes(location.pathname) && !cartOpen && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
