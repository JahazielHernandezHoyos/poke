import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";

//componentes
import Galeria from "../components/Galeria";
import Tabla from "../components/Tabla";
import Navbar from "../components/Navbar";

const PaginaGaleria = () => {

  return (
    <>
      <Navbar/>
      <div className="container">
          <Galeria />
      </div>
    </>
  );
};

export default PaginaGaleria;
