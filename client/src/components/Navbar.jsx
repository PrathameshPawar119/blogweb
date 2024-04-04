import React, { useEffect, useState } from "react";
import Image from "../assets/Carousalimages/logo.png";
import FB from "../assets/icons/facebook.png";
import IG from "../assets/icons/instagram.png";
import TW from "../assets/icons/twitter.png";
import open from "../assets/icons/menu.png";
import close from "../assets/icons/close.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    return "/";
  };
  const navBtnGrp = [
    {
      title: "Home",
      nav: "/",
    },
    {
      title: "About",
      nav: "/",
    },
  ];
  const socialBtn = [
    {
      icon: FB,
    },
    {
      icon: IG,
    },
    {
      icon: TW,
    },
  ];
  const [menu, setMenu] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  return (
    <div className="top-0 z-50 bg-white flex items-center justify-between border-2 border-black py-2 px-4 relative">
      <div className="md:w-1/3 w-1/2 border-2 border-black flex items-center justify-start">
        <Link to="/">
          <img src={Image} className="h-10 " />
        </Link>
        <h1 className="font-bold text-lg">BlogWebb</h1>
      </div>
      <div className="md:w-1/3 w-1/2 c flex items-center justify-end">
        <div className="sm:flex hidden border-2 border-black rounded-full w-fit  items-center justify-between gap-4 font-semibold px-4 py-2 md:mx-auto">
          {navBtnGrp.map((btn, index) => (
            <button key={index}>
              <Link to={btn.nav}>{btn.title}</Link>
            </button>
          ))}
          {localStorage.getItem("token") ? (
            <button
              onClick={() => {
                localStorage.clear();
              }}
            >
              <Link to={"/"}>Logout</Link>
            </button>
          ) : (
            <button>
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
        {dimensions.width <= 768 && (
          <button
            className="sm:hidden block border-2 border-black"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <img src={close} alt="openIcon" />
            ) : (
              <img src={open} alt="closeIcon" />
            )}
          </button>
        )}
      </div>
      <div className="md:w-1/3 border-2 border-black md:flex hidden items-center justify-end ">
        <div className="border-2 border-black flex items-center justify-between gap-3 px-4 py-2 w-fit">
          {socialBtn.map((icon, index) => (
            <img
              src={icon.icon}
              className="hover:scale-125 transition-all cursor-pointer"
              key={index}
            />
          ))}
        </div>
      </div>
      {menu && dimensions.width <= 639 && (
        <div className=" z-50 bg-white absolute w-full -bottom-52 py-4 font-semibold text-lg right-0 border-2 border-black flex items-center justify-center flex-col gap-6">
          {navBtnGrp.map((btn, index) => (
            <button>
              <Link to={btn.nav}>{btn.title}</Link>
            </button>
          ))}
          <div className="border-2 border-black flex items-center justify-between gap-3 px-4 py-2 w-fit">
            {socialBtn.map((icon, index) => (
              <img
                src={icon.icon}
                className="hover:scale-125 transition-all cursor-pointer"
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
