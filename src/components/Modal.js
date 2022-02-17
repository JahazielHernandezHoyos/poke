const Modal = ({id, habilidad, titulo, estadisticas}) => {
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
              <ul>
                <li>
                    <h6>Estadistica Base: {estadisticas}</h6>   
                </li>
                <li>
                    <h6>Habilidad: {habilidad}</h6>
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
