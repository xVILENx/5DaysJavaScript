import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio.js";

const Cards = ({ numCategoriaSelecionada }) => {
  const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
  const categoriaSelecionada = itensCategoria[numCategoriaSelecionada];

  return (
    <div className="cards">
      {categoriaSelecionada.map((item) => (
        <Card 
        titulo={item.nome}
        descricao={item.descricao}
        preco={item.preco}
        imagem={item.imagem}
        />  
      
    //</div><div className="cards">
      //{itensCategoria[categoriaSelecionada].map((itemCategoria, index) => (
        //<Card key={index} itemCategoria={itemCategoria} />
      ))}

    </div>
  );
};

export default Cards;