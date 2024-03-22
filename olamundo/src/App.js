import './App.css';
import TituloPrincipal from './TituloPrincipal';
import OutroTitulo from './OutroTitulo';

function App() {
  return (
    <div className="App">
      <TituloPrincipal titulo="Título passado como parâmetro!" />
      <OutroTitulo titulo="Parametro para o componente" />
    </div>
  );
}

export default App;
