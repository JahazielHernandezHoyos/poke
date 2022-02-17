const Modal = ({
  id, 
  imagen, 
  habilidad, 
  titulo, 
  estadisticas, 
  peso, 
  altura, 
  tipo, 
  capturar, 
  hp,
  ataque,
  defensa,
  ataque_especial,
  defensa_especial,
  velocidad,
}) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" style={{ textTransform: "capitalize" }}>
              {titulo}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img width="400" heigth="400" class="img-fluid position-absolute top-50 start-100 translate-middle" src={imagen}></img>
              <ul class="py-5">
                <li>
                    <strong>Tipo: </strong> {tipo}.
                </li>      
                <li>
                    <strong>Estadistica Base: </strong> {estadisticas}.  
                </li>
                <li>
                    <strong>Habilidad: </strong> {habilidad}.
                </li>
                <li>
                    <strong>Peso: </strong> {peso} Kg.
                </li>
                <li>
                    <strong>Altura: </strong> {altura} Mts.
                </li>
                <li>
                    <strong>Capturado: </strong> {capturar}.
                </li>
                <li>
                    <strong>HP: </strong> {hp}.
                </li>
                <li>
                    <strong>Ataque: </strong> {ataque}.
                </li>
                <li>
                    <strong>Defensa: </strong> {defensa}.
                </li>
                <li>
                    <strong>Ataque Especial: </strong> {ataque_especial}.
                </li>
                <li>
                    <strong>Defensa Especial: </strong> {defensa_especial}.
                </li>
                <li>
                    <strong>Velocidad: </strong> {velocidad}.
                </li>
              </ul>

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
