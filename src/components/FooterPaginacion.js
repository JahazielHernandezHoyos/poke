import React from "react";

const FooterPaginacion = (pagina, setPagina, maximo) => {
  console.log(maximo);
  const [input, setInput] = React.useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
  };

  return (
    <footer
      class="footer text-center text-light"
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
      }}
    >
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Anterior</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default FooterPaginacion;
