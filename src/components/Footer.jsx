import React from "react";
import Layout from "./Layout";
import LogoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <section className="mx-auto px-4 md:px-8 lg:px-0 py-14 lg:max-w-[1120px] font-poppins flex justify-between items-center">
        <div>
          <figure>
            <a title="Estilo Nápoles" href="#">
              <img className="w-64" src={LogoFooter} alt="" />
            </a>
          </figure>
        </div>

        <div className="flex gap-16 text-white">
          <div>
            <h3 className="bavi mb-3 text-xl">Navegacion</h3>
            <ul className="text-sm">
              <li className="mb-4 hover:text-blue duration-200 ease-in-out">
                <a title="Home" href="#">Home</a>
              </li>
              <li className="mb-4 hover:text-blue duration-200 ease-in-out">
                <a title="Nosotros" href="#">Nosotros</a>
              </li>
              <li className="mb-4 hover:text-blue duration-200 ease-in-out">
                <a title="Menú" href="#">Menú</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="bavi mb-3 text-xl">Visitanos</h3>
            <p className="text-sm mb-4">
              Av. Ameghino 598, Campana, Bs As. <br /> (Esta el Diego pintado en
              la entrada)
            </p>
            <button className="bg-white text-blue text-sm px-4 py-2 rounded-lg font-medium hover:bg-white/90 duration-200 ease-in-out">
              <a title="Ir al chat" href="#">
                Reservas
              </a>
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
