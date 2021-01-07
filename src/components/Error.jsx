import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
background-color: #b7322c;
padding:1rem;
color: white;
font-size:30px;
font-weight: bold;
text-transform: uppercase;
text-align:center;
font-family: 'Bebas Neue', cursive;

`;
const Error = ({mensaje}) => {

    return (
      <Mensaje>{mensaje}</Mensaje>
      );
}
 
export default Error;