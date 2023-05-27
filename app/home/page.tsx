import React, { Component } from "react";
import Carrusel from "../components/Carrusel";

const Home = () => {
  return (
    <div>
      <Carrusel />
      <div className="bg-fondo mr-20 ml-20">
        <h1 className="text-center text-Thover text-3xl mt-5 mb-5">
          ¡Bienvenido a la página web de la Prueba Técnica DCorp!
        </h1>
        <p className="text-center text-white text-2xl ml-20 mr-20 mb-5">
          Esta página ha sido elaborada utilizando Next.js, React, Reactstrap y
          Tailwind CSS, y está dedicada al fascinante mundo cinematográfico de
          Marvel. Aquí encontrarás información y contenido relacionado con las
          increíbles películas, personajes y universo de Marvel. Sumérgete en el
          emocionante universo de los superhéroes y descubre todo lo que tenemos
          preparado para ti.
        </p>
      </div>
    </div>
  );
};

export default Home;

