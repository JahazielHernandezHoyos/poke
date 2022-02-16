//componentes
import Tabla from "../components/Tabla";
import Navbar from "../components/Navbar";

const PaginaTabla = () => {
    return ( 
        <>
        <Navbar/>
        <div className="container">
            <Tabla />
        </div>
      </>
     );
}
 
export default PaginaTabla;