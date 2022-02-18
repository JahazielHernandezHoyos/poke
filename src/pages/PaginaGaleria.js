import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";

//componentes
import Galeria from "../components/Galeria";
import Navbar from "../components/Navbar";
import FooterPaginacion from "../components/FooterPaginacion";

const PaginaGaleria = () => {

  return (
    <>
      <Navbar/>
      <div className="container">
          <Galeria />
      </div>
      <FooterPaginacion/>
    </>
  );
};

export default PaginaGaleria;
