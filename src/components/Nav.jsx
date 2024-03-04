import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logoNav.svg";
import LogoWords from "../assets/logoWords.svg";

const NavList = ({ closeMenu }) => {
  const handleClose = () => {
    closeMenu();
  };

  return (
    <>
      {/* desktop */}

      <ul className="hidden lg:flex z-10 mt-6 flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="home"
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Home
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Nosotros
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="menu"
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Menú
          </Link>
        </Typography>

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Contacto
          </Link>
        </Typography>
      </ul>

      {/* mobile */}

      <ul className="lg:hidden flex z-10 mt-6 flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="home"
            onClick={handleClose}
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Home
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="about"
            onClick={handleClose}
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Nosotros
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="menu"
            onClick={handleClose}
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Menú
          </Link>
        </Typography>

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 pt-3 pb-5"
        >
          <Link
            smooth={true}
            spy={true}
            to="contact"
            onClick={handleClose}
            className="cursor-pointer hover:text-orange font-medium flex items-center font-poppins text-black text-base transition-colors"
          >
            Contacto
          </Link>
        </Typography>
      </ul>
    </>
  );
};

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const closeMenu = () => {
    setOpenNav(false);
  };

  return (
    <>
      <div className="z-[100] fixed top-0 w-full bg-white">
        <nav className="mx-auto max-w-[1120px] shadow-none px-4 md:px-8 py-0 lg:px-0 border-none">
          <div className="flex items-center justify-between py-2">
            <Typography as="a" href="#" variant="h6" className="cursor-pointer">
              <div className="flex items-center gap-2 lg:gap-4">
                <Link
                  to="home"
                  smooth={true}
                  offset={-80}
                  className="cursor-pointer"
                  duration={1300}
                >
                  <img
                    className="w-12"
                    src={Logo}
                    loading="lazy"
                    alt="Estilo Nápoles"
                  />
                </Link>
                <img
                  className="w-36 lg:w-44"
                  src={LogoWords}
                  alt="Estilo Nápoles"
                />
              </div>
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="w-7 text-black" strokeWidth={1.5} />
              ) : (
                <Bars3Icon className="w-7 text-black" strokeWidth={1.5} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList closeMenu={closeMenu} />
          </Collapse>
        </nav>
      </div>
      <div className="fixed top-[63px] z-50 bg-[url('./assets/bordeIrregularFino.svg')] w-full h-6 bg-no-repeat"></div>
    </>
  );
};

export default Nav;
