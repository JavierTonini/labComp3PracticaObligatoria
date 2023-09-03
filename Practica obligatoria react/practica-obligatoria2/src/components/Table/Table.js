import React from "react";

const Table = ({ servicios }) => {
  const promedio = servicios.reduce((acumulador, elemento) => {
    return acumulador + elemento.income;
  }, 0);
  const promedioNeto = promedio / servicios.length;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre de la Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((elemento) => (
            <tr>
              <td>{elemento.brand}</td>
              <td>$ {elemento.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de ingreso neto: {promedioNeto} </p>
    </div>
  );
};

export default Table;
