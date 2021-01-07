import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import useMoneda from "../hooks/useMoneda";
import useCripto from "../hooks/useCripto";
import Error from "./Error";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    background-color: #326a60;
    cursor: pointer;
  }
`;
const Formulario = ({ guardarCriptomoneda, guardarMoneda }) => {
  //State lista cripto
  const [listaCripto, setCripto] = useState([]);

  //State para la validación

  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "USD", nombre: "Dollar Estadounidense" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "DOP", nombre: "Peso Dominicano" },
    { codigo: "COP", nombre: "Peso Colombiano" },
  ];
  //Utilizar custom hook
  const [moneda, SelecMonedas] = useMoneda("Elige tu Moneda", "", MONEDAS);

  //Utilizar useCripto
  const [cripto, SelecCripto] = useCripto(
    "Elige tu CriptoMoneda",
    "",
    listaCripto
  );
  //EJEcutar llamado a el API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setCripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);
  //Cuando el usuarrio hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    if (moneda === "" || cripto === "") {
      setError(true);
      return;
    }
    //Caso contrario `pasar los datos al componente principal
    setError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(cripto);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son Requeridos" /> : null}
      <SelecMonedas />

      <SelecCripto />

      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
