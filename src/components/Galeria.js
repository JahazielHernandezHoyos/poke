/* eslint-disable array-callback-return */
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/loader.css";

//componentes
import Modal from "./Modal";

const Galeria = () => {
  const [setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");

  const pokemons = [];

  async function fetchData() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=150"
    );
    const data = await response.json();
    setResult(
      await data.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((allpokemon) => pokemons.push(allpokemon));
        setPoke(pokemons);
      })
    );
  }
  useEffect(() => {
    fetchData();
  }, []);

  setTimeout(() => {
    setLoad(false);
    // console.log(poke);
  }, 1000);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {load ? (
            <div className="container" style={{ paddingLeft: "120px" }}>
              <Spinner
                style={{ width: "5rem", height: "5rem", container: "center" }}
                type="grow"
                color="danger"
              />
            </div>
          ) : (
            poke.map((info) => (
              <div className="col-sm-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div id={info.id} key={info.id}>
                    <div className="card">
                      <img
                        src={info.sprites.front_default}
                        className="card-img-top"
                        alt="pokemon"
                      />
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ textTransform: "capitalize" }}
                        >
                          {info.name}
                        </h5>
                        <p className="card-text">
                          Tipo: {info.types[0].type.name}
                        </p>
                        <p className="card-text">Id: {info.id}</p>

                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          data-bs-toggle="modal"
                          data-bs-target={`#id${info.id}`}
                        >
                          Ver más información
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
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
      </div>
    </>
  );
};

export default Galeria;
