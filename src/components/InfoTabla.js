const InfoTabla = ({
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
    <>
      <div
        class="offcanvas offcanvas-end offcanvas-fade"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id={id}
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="bg-danger offcanvas-header">
          <h2 class="py-5 text-white mt-5 offcanvas-title" id="offcanvasScrollingLabel"style={{ textTransform: "capitalize" }}>
              {titulo}
          </h2>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="bg-dark offcanvas-body">
        <img width="400" heigth="400" class="py-5 img-fluid position-absolute start-50 bottom-25 end-0" src={imagen}></img>
        <ul class="py-5 text-white">
        
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
      </div>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
            Offcanvas with backdrop
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
        

        </div>
      </div>
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoTabla;
