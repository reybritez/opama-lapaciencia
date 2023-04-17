import React, { useState, StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import Bus from './components/Bus.jsx';
import BusesTable from './components/BusesTable.jsx';

function BusGenerator() {
  const [displayTable, setDisplayTable] = useState(false);
  const [bus, setBus] = useState(null);

  const toggleDisplay = () => {
    setDisplayTable(!displayTable);
  }

  const fetchBuses = async () => {
    const response = await fetch("http://127.0.0.1:8000/data/api/test/tu_bus_de_la_suerte");
    const buses = await response.json();
    const randomIndex = Math.floor(Math.random() * buses.length);
    setBus(buses[randomIndex].EOT);
  }

  return (
    <div>
      <h2>Esta app contiene datos acerca de los buses de la API: Catálogo de Rutas 2023</h2>
      <br />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${!displayTable && 'active'}`} onClick={toggleDisplay}>
            Buscar Bus Aleatorio
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${displayTable && 'active'}`} onClick={toggleDisplay}>
            Ver tabla de Buses
          </button>
        </li>
      </ul>

      <br />

      {displayTable ? <BusesTable /> : <Bus fetchBuses={fetchBuses} bus={bus} />}

    </div>
  );
}

const rootElement = document.getElementById('tubus');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BusGenerator />
  </StrictMode>,
);

