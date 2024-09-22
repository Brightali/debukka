import { useState, useContext } from "react";
import { mobileNav } from "../constants";
import { NavLink } from "react-router-dom";
import { IconCart, logo } from "../assets/images";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setCartOpen, cartItem } = useContext(AppContext);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="frame pt-6 pb-4 sticky top-0 z-10 bg-bg_color">
      <div className="inner-frame ">
        <div className="flex justify-between mb-4">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" width={100} />
          </NavLink>

          <NavLink to={"/"}>
            <div></div>
          </NavLink>
        </div>

        <div className="flex justify-between h-8">
          <div className="relative max-w-max grid place-items-center">
            <button
              className={`w-8 h-8 focus:outline-none rounded ${
                isOpen ? "hidden" : ""
              }`}
              onClick={toggleNav}
            >
              <div className="absolute -mt-1 left-1">
                <span
                  className={`${
                    isOpen ? "rotate-45" : "-translate-y-2"
                  } menu-button`}
                ></span>
                <span
                  className={`${isOpen ? "opacity-0" : ""} menu-button`}
                ></span>
                <span
                  className={`${
                    isOpen ? "-rotate-45" : "translate-y-2"
                  } menu-button`}
                ></span>
              </div>
            </button>
          </div>

          <div className="relative max-w-max grid place-items-center">
            <button
              onClick={() => setCartOpen((prev) => !prev)}
              className={`w-8 h-8 focus:outline-none rounded relative ${
                isOpen ? "hidden" : ""
              }`}
            >
              <img src={IconCart} alt="" width={40} />
              {cartItem.length > 0 ? (
                <div className="w-5 h-5 rounded-full bg-white border-2 border-main_red absolute -top-1 -right-2">
                  <p className="grid place-items-center text-mai font-bold text-xs">
                    {cartItem.length}
                  </p>
                </div>
              ) : null}
            </button>
          </div>
        </div>
      </div>

      {/* .............................. mobile menu */}
      <div
        className={`fixed h-full w-dvw left-0 top-0 max-w-[620px] min-h-[400px] px-6  pt-14 bg-white z-10 ${
          isOpen ? "fade-in" : "fade-out"
        }`}
      >
        <div className="flex justify-between mb-8 relative items-center">
          <p className="text-4xl max-w-[50%] font-semibold text-main_red">
            Xperience More
          </p>
          <div className="relative max-w-max grid place-items-center">
            <button
              className="w-8 h-8 focus:outline-none rounded"
              onClick={toggleNav}
            >
              <div className="absolute -mt-1 left-1">
                <span
                  className={`${
                    isOpen ? "rotate-45" : "-translate-y-2"
                  } block absolute h-1 w-6 bg-red-600`}
                ></span>
                <span
                  className={`${
                    isOpen ? "opacity-0" : ""
                  } block absolute left-1 h-1 w-5 bg-red-600`}
                ></span>
                <span
                  className={`${
                    isOpen ? "-rotate-45" : "translate-y-2"
                  } block absolute h-1 w-6 bg-red-600`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {mobileNav.map((nav, index) => (
            <NavLink to={nav.path} key={index} onClick={handleNavLinkClick}>
              <div className="flex items-center gap-2 p-2 w-40 min-w-max rounded-md shadow-md bg-white mb-4 border-l-2 border-l-main_red">
                <img src={nav.icon} width={30} alt="Nav Icon" />
                {nav.text}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
