import React, { Fragment, useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color: #fff;
text-transform: uppercase;
font-weight:bold;
font-size:2.4rem;
margin-top:2rem;
display:block;
`;
const Select = styled.select`
width:100%;
display:block;
padding:1rem;
-webkit-apearence:none;
border-radius:10px;
border:none;
font-size: 1.4rem;
`;
const useCripto = (label, stateInicial, opciones) => {
  //State de nuestro custom state
  const [state, actualizarState] = useState(stateInicial);
  
  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
      onChange={e => actualizarState(e.target.value)}
      value={state}
      >
        <option value="">-- Seleccione --</option>

        {opciones.map( opcion => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
        ))}

      </Select>
    </Fragment>
  );
  //Retornar state , interfaz y func que modifica el state

  return [state, SelectCripto, actualizarState];
};

export default useCripto;
