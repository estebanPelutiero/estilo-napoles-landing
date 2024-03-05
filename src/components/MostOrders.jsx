import React from "react";
import Layout from "./Layout";
import Whatsapp from "../assets/whatsapp.svg";
import Cuatroque from "../assets/imgs/cuatroque.png";
import Barrilete from "../assets/imgs/barrilete_cosmico.png";
import Mortadela from "../assets/imgs/mortadela.png";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

const MostOrders = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <Layout className={""}>
      <h2 className="text-5xl lg:text-7xl text-blue bavi mb-8 lg:mb-16 text-center">
        Lo que mas sale
      </h2>

      <section className="flex flex-col md:flex-row gap-8">
        <article className="card group shadow-xl overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Cuatroque} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
              Cuatroque
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, provolone, parmesano, queso azul,
              nueces, orégano y aceite de oliva extra virgen de pepperoncino.
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
          <div className="image">
            <img className="drop-shadow-lg" src={Barrilete} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Barrilete Cosmico
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, bocconcino, albahaca, crema de pesto, aceite de
              oliva extra vírgen de ajo y rayadura de limón
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
          <div className="image">
            <img className="drop-shadow-lg" src={Mortadela} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Mortadela
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, mortadela de pistachos, ajíes en
              vinagre, albahaca y aceite de oliva extra vírgen de ajo.
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default MostOrders;
