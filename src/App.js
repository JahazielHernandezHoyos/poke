import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");

  const pokemons = [];

  function mostrarMasInformacion(poke) {
    const contenidoExtra = document.querySelector("#informacionExtra")
    poke.forEach(pokemon => {
      console.log(pokemon)
    })

  }

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

  mostrarMasInformacion(poke)

  setTimeout(() => {
    setLoad(false);
    // console.log(poke);
  }, 1000);

  return (
    <>
      <header className="bg-danger py-5">
        <h1 className="text-center text-white">POKEDEX</h1>
      </header>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {load ? (
            <p>Cargando...</p>
          ) : (
            poke.map((img, i) => (
              <div className="col-sm-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div id={img.id} key={img.id}>
                    <div className="card">
                      <img
                        src={img.sprites.front_default}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{img.name}</h5>
                        <p className="card-text">
                          tipo: {img.types[0].type.name}
                        </p>

                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#masinfo"
                        >
                          Ver mas información de {img.name}
                        </button>

                        <div
                          class="modal fade"
                          id="masinfo"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog" id={img.id} key={img.id}>
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" >
                                  {img.name}
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body" id="informacionExtra">...</div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cerrar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*
                        <h2>{img.name}</h2>
                         <p>
                        type:
                          {img.types[0].type.name}
                        </p>
                        <p>
                        abilities:
                          {img.abilities[0].ability.name}
                        </p>
                        <p>
                        height:
                          {img.height}
                        </p>
                        <p>
                        weight:
                          {img.weight}
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
