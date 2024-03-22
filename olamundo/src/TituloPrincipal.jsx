import React from "react";

function TituloPrincipal(props) {
  let titulo = props.titulo ?? "Olá, mundo!";
  
  return(
    <h1>{ titulo }</h1>
  );
}

export default TituloPrincipal;