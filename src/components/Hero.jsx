import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-scroll";
import Layout from "./Layout";
import "../index.css";

const Hero = () => {
  return (
    <div className="overflow-hidden bg-[url('./assets/imgs/heroImg.jpg')] bg-cover bg-center z-[-1] w-full">
      <div className="overflow-x-hidden absolute z-0 w-full h-[100vh] backdrop-brightness-[.5]"></div>
      <Layout id={"home"} className="relative z-10 flex items-center">
        <div className="w-full">
          <div className="mb-14 text-center text-white">
            <h1 className="text-7xl md:text-8xl bavi unique-shadow">
              Masa Italiana, <br />
              Gusto Argentino
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">

            {/* Menu button */}

            <Link smooth={true} to="servicios" offset={-100} duration={1300}>
              <Button className="text-base font-poppins capitalize font-semibold tracking-wider text-white bg-blue px-8 py-2 lg:px-9 lg:py-[10px] rounded-lg unique-shadow">
                <Link smooth={true} spy={true} to="menu" duration={1300}>
                  Menú
                </Link>
              </Button>
            </Link>

            {/* Reserva button */}

            <Link smooth={true} to="servicios" offset={-100} duration={1300}>
              <Button className="text-base font-poppins capitalize font-semibold tracking-wider text-white bg-red px-8 py-2 lg:px-9 lg:py-[10px] rounded-lg unique-shadow">
                <Link smooth={true} spy={true} to="contact" duration={1300}>
                  Reservas
                </Link>
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
      <div className="absolute -bottom-[1px] z-50 bg-[url('./assets/bordeIrregularFino.svg')] w-full h-6 bg-no-repeat rotate-180"></div>
    </div>
  );
};

export default Hero;
