import React from "react";
import Layout from "./Layout";
import AboutPic from "../assets/imgs/about.webp";

const About = () => {
  return (
    <>
      <Layout className={"flex flex-col md:flex-row items-center pb-24"}>
        <figure className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full lg:w-[80%] rounded-lg mb-8 lg:mb-0"
            src={AboutPic}
            alt="Cocina a la vista del público con horno de barro"
          />
        </figure>
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl lg:text-7xl text-blue bavi mb-8">Nosotros</h2>
          <p className="font-poppins text-lg text-gray">
            Cocina abierta, horno de barro, esperando nuestras pizzas hechas con
            masa italiana fermentada entre 24 y 48 horas, que alojan sabores
            argentinos, logrando una fusión con lo mejor de ambas culturas en
            cada bocado. <br /> <br />
            Celebramos nuestra identidad con eventos que destacan nuestra pasión
            futbolera y hermandad argentina, honrando las tradiciones de
            nuestros antepasados, respetando la sobremesa y jugando a las cartas
            con un postrecito de por medio. <br /> <br />
            Formamos un lugar donde los chicos pueden pintar, y los grandes
            pueden pedir que escuchar, para que los artistas puedan venir a
            dejar su arte entre nuestras paredes y compartir momentos llenos de
            amigos y buena comida.
          </p>
        </div>
      </Layout>
      <div className=" z-50 bg-[url('./assets/bordeNegro.svg')] w-full h-6 bg-no-repeat rotate-180"></div>
    </>
  );
};

export default About;
