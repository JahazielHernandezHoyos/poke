import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/loader.css";
import InfoTabla from "./InfoTabla";

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
          poke.map((info) => (
            <div>
              <table className="mt-5 table">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Tamaño</th>
                    {/* <th scope="col">Tipo</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textTransform: "capitalize" }}>{info.name}</td>

                    <td scope="row">{info.weight / 10}Kg.</td>

                    <td scope="row">{info.height / 10}Mts.</td>

                    {/* <td>{info.types[0].type.name}</td> */}
                    <td></td>
                    <td>
                      <InfoTabla />
                      <button
                        class="btn btn-outline-dark"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target={`#id${info.id}`}
                        aria-controls="offcanvasScrolling"
                      >
                        Ver más información
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <InfoTabla
                id={`id${info.id}`}
                titulo={info.name}
                habilidad={info.abilities[0].ability.name}
                estadisticas={info.stats[0].base_stat}
                imagen={info.sprites.front_default}
                peso={info.weight / 10}
                altura={info.height / 10}
                tipo={info.types[0].type.name}
                hp={info.stats[0].base_stat}
                ataque={info.stats[1].base_stat}
                defensa={info.stats[2].base_stat}
                ataque_especial={info.stats[3].base_stat}
                defensa_especial={info.stats[4].base_stat}
                velocidad={info.stats[5].base_stat}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Galeria;
