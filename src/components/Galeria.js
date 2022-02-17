import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/loader.css";
import Modal from "./Modal";

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
    console.log(poke);
  }, 1000);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {load ? (
            <div class="mt-5 me-5 text-center">
              <Spinner color="danger" />
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

                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          data-bs-toggle="modal"
                          data-bs-target={`#id${info.id}`}
                        >
                          Ver mas información
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
                imagen={info.sprites.front_default}/>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Galeria;
