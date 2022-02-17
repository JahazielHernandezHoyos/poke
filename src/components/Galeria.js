import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import {Spinner} from "reactstrap";
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {load ?(
            <div class="mt-5 me-5 text-center">
              <Spinner color="danger"/>
            </div>
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
                          class="btn btn-outline-danger"
                          data-bs-toggle="modal"
                          data-bs-target={("#", img.id)}
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
                                <h5 class="modal-title">{img.name}</h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body" id="informacionExtra">
                                ...
                              </div>
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

export default Galeria;
