import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/loader.css";

const Galeria = () => {
  const [setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");

  const pokemons = [];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => pokemons.push(allpokemon));
            setPoke(pokemons);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoad(false);
    // console.log(poke);
  }, 1000);

  return (
    <>
      <div className="container">
        {load ? (
          <div class="mt-5 me-5 text-center">
            <Spinner color="danger" />
          </div>
        ) : (
          poke.map((img, i) => (
            <div>
              <table className="mt-5 table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    {/* <th scope="col">Tipo</th> */}
                    <th scope="col">Foto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{img.id}</th>
                    <td style={{textTransform: "capitalize"}} id={img.id} key={img.id}>
                      {img.name}
                    </td>
                    {/* <td>{img.types[0].type.name}</td> */}
                    <td>
                      <img
                        src={img.sprites.front_default}
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                      >
                        Más información
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Galeria;
