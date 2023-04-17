import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function BusesTable() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/data/api/test/tu_bus_de_la_suerte')
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
    <div>

      <h1>Buses Table - App de Ejemplo en React.js</h1>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={() => handleSort('EOT')}>EOT</th>
            <th className='text-center' onClick={() => handleSort('ruta_hex')}>ruta_hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.ruta_hex}>
              <td>{item.EOT}</td>
              <td>{item.ruta_hex}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default BusesTable;