import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Cargando from "./components/Cargando";

import imagen from "./crypto.png";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  color: white;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
function App() {
  
  const [moneda, guardarMoneda] = useState("");
  const [criptoMoneda, guardarCriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cotizar = async () => {
      //Evitar que se ejecute
      if (moneda === "") return;

      //Consultar el API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
      const results = await axios.get(url);
      //Mostrar el Spinner
      setCargando(true);
      setTimeout(() => {
        // ocultar el spinner
        setCargando(false);
        //Obtener la data de Axios
        setResultado(results.data.DISPLAY[criptoMoneda][moneda]);
      }, 3000);
    };
    cotizar();
  }, [moneda, criptoMoneda]);

  //MOstrar spinner o resultado

  const componente = cargando ? <Cargando />
   :<Cotizacion resultado={resultado} cripto={criptoMoneda} moneda={moneda} />;

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen principal" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
