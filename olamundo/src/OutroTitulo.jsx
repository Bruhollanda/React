import React, {Component} from "react";

class OutroTitulo extends Component {
  render() {
    let titulo = this.props.titulo ?? "Olá, componente com classe!";

    return (
      <h1>{ titulo }</h1>
    );
  }
}

export default OutroTitulo;