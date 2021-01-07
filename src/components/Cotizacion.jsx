import React, { Fragment } from "react";
import styled from "@emotion/styled";
const Resultado = styled.div`
  color: white;
  font-family: "Bebas Neue", cursive;
`;
const Span = styled.span`
  color: green;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 5px;
`;
const Cotizacion = ({ resultado, cripto, moneda }) => {
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <Fragment>
      <Resultado>
        <h2>
          {cripto} <Span> TO </Span> {moneda}
        </h2>
        <p>
          El precio es: <Span>{resultado.PRICE}</Span>
        </p>
        <p>
          Precio más Alto del dia: <Span>{resultado.HIGHDAY}</Span>
        </p>
        <p>
          Precio más Bajo del dia: <Span>{resultado.LOWDAY}</Span>
        </p>
        <p>
          Variación últimas 24 Horas: <Span>{resultado.CHANGEPCT24HOUR}</Span>
        </p>
        <p>
          Ultima actualización: <Span>{resultado.LASTUPDATE}</Span>
        </p>
      </Resultado>
    </Fragment>
  );
};

export default Cotizacion;
