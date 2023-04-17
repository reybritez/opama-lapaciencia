import React, { useState, useEffect, StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

function Tabla() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/data/api/test/biggest-spender')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key: key, direction: direction });
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th onClick={() => handleSort('fechahoraevento')}>Fecha-Hora Evento <i className="fa-solid fa-sort-down fa-2xs"></i></th>
          <th onClick={() => handleSort('serialtarjeta')}>Serial Tarjeta <i className="fa-solid fa-sort-down fa-2xs"></i></th>
          <th onClick={() => handleSort('latitude')}>Latitud <i className="fa-solid fa-sort-down fa-2xs"></i></th>
          <th onClick={() => handleSort('longitude')}>Longitud <i className="fa-solid fa-sort-down fa-2xs"></i></th>
          <th onClick={() => handleSort('idrutaestacion')}>ID-Ruta-Estación <i className="fa-solid fa-sort-down fa-2xs"></i></th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.fechahoraevento}>
            <td>{item.fechahoraevento}</td>
            <td>{item.serialtarjeta}</td>
            <td>{item.latitude}</td>
            <td>{item.longitude}</td>
            <td>{item.idrutaestacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const rootElement = document.getElementById('tabla');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Tabla />
  </StrictMode>,
);

