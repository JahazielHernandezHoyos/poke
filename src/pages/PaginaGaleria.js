import "bootstrap/dist/css/bootstrap.css";

//componentes
import Galeria from "../components/Galeria";
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
