import React, {useState} from 'react';

const Categorias = () => {
  //Hook
  //Variável de Estado
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  //Forma errada
  //numCategoriaSelecionada = 1
  
  //Forma certa
  //setCategoriaSelecionada(1)
    
  return (
    <div className="categorias"> 
      <p className='categoria categoria--selecionada' onClick={() => setCategoriaSelecionada(0)}>Pratos principais</p> 

      <p className='categoria' onClick={() => setCategoriaSelecionada(1)}>Sobremesas</p> 

      <p className='categoria' onClick={() => setCategoriaSelecionada(2)}>Bebidas</p> 
    </div>  
  );
}

export default Categorias
//function
//arrow function