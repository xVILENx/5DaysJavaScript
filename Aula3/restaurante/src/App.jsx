import "./App.css";
import Categorias from './components/Categorias';
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  // Hook
  // Variavel de Estado
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  //Forma errada numCategoriaSelecionada = 1;
  // Forma certa setNumCategoriaSelecionada(1);

  return ( 
    <div ClassName="container">
      <Banner />

      <Categorias numCategoriaSelecionada={numCategoriaSelecionada} setNumCategoriaSelecionada={setNumCategoriaSelecionada}/>

      <Cards numCategoriaSelecionada={numCategoriaSelecionada}/>
    
    
    </div>



  );
}

export default App