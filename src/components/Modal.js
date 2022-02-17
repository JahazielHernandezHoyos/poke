const Modal = ({id, imagen, habilidad, titulo, estadisticas}) => {
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
            <img class="position-absolute top-0 start-50 translate-middle" src={imagen}></img>
              <ul class="mt-5">      
                <li>
                    <strong>Estadistica Base:</strong>{estadisticas}   
                </li>
                <li>
                    <strong>Habilidad: {habilidad}</strong>
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
