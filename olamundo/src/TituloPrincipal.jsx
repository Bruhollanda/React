import React, { useEffect, useState } from "react";

function TituloPrincipal(props) {
  const [ titulo, setTitulo ] = useState(props.titulo ?? "Olá, mundo!");

  useEffect(() => console.log("O título está sendo observado."), [titulo]);

  function onClickHandler(event) {
    alert("Clicou!");
  }

  function onChangeHandler(event) {
    setTitulo(event.target.value);
  }

  return(
    <>
      <h1>{ titulo }</h1>
      <button onClick={onClickHandler}>Clique aqui!</button>
      <label>
        Insira um novo titulo:
        <input type="text" onChange={ onChangeHandler } />
      </label>
    </>
  );
}

export default TituloPrincipal;