import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Tabla = () => {
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");

  const pokemons = [];

  function mostrarMasInformacion(poke, id) {
    const contenidoExtra = document.querySelector("#informacionExtra");
    poke.forEach((pokemon) => {
      console.log(pokemon[id]);
    });
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

  mostrarMasInformacion(poke);

  setTimeout(() => {
    setLoad(false);
    // console.log(poke);
  }, 1000);

  return (
    <>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Peso</th>
              <th scope="col">Tamaño</th>
            </tr>
          </thead>
        </table>
      </div>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">{poke[0].name}</th>
                </tr>
            </tbody>
          </table>
    </>
  );
          };

export default Tabla;
