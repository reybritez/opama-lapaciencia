import React, { useState, useEffect } from 'react';

function Bus() {

  const BUSES_API_URL = "http://127.0.0.1:8000/data/api/test/tu_bus_de_la_suerte";

  const [bus, setBus] = useState(null);

  async function fetchBuses() {
    const response = await fetch(BUSES_API_URL);
    const buses = await response.json();
    const randomIndex = Math.floor(Math.random() * buses.length);
    setBus(buses[randomIndex].EOT);
  }

  return (
    <div>

        <h1>Ejemplo de App React.js- Random Bus</h1>

        <br></br>

        <div className="container text-center">

        <div className="card p-4" style={{ height: '250px' }}>
            <div className="card-body">
            <h2 className="card-title">Buscar Random Bus</h2>
            <div>
                <button className="btn btn-primary" onClick={fetchBuses}>
                    ¿Qué bus me toca?
                </button>
            </div>
            <hr />
            <p className="card-text fw-bolder">{bus}</p>
            </div>
        </div>

        </div>

        <br></br>

    </div>
  );
}

export default Bus;
