import "bootstrap/dist/css/bootstrap.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState} from "react";
import "./App.css";

function App() {
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const arr = [];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=15")
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);
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

        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          
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
}

export default App;
