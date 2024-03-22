import React from "react";

function TituloPrincipal(props) {
  let titulo = props.titulo ?? "Olá, mundo!";

  function onClickHandler(event) {
    alert("Clicou!");
  }

  return(
    <div>
      <h1>{ titulo }</h1>
      <button onClick={onClickHandler}>Clique aqui!</button>
    </div>
  );
}

export default TituloPrincipal;