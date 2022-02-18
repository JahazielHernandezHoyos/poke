//componentes
import Tabla from "../components/Tabla";
import Navbar from "../components/Navbar";
import FooterPaginacion from "../components/FooterPaginacion";

const PaginaTabla = () => {
    return ( 
        <>
        <Navbar/>
        <div className="container">
            <Tabla />
        </div>
        <FooterPaginacion/>
      </>
     );
}
 
export default PaginaTabla;