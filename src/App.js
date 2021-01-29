import { Component } from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer";
import CurrentSale from "./components/CurrentSale";
import Filter from "./components/Filter";
import Total from "./components/Total";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
      { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
      { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
      { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
      { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
      { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
      { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
    ],
    filteredProducts: [],
    currentSale: { total: 0, saleDetails: [] },
  };

  showProducts = (text) => {
    const { products } = this.state;
    const filter = products.filter((item) => {
      return (
        item.name.toLowerCase() === text.toLowerCase() ||
        item.category.toLowerCase() === text.toLowerCase()
      );
    });
    this.setState({ filteredProducts: filter });
  };

  handleClick = (productId) => {
    const { products, currentSale } = this.state;
    const { saleDetails } = currentSale;

    const sale = products.find((item) => {
      return item.id === productId;
    });

    saleDetails[0]
      ? this.setState({
          currentSale: { ...currentSale, saleDetails: [...saleDetails, sale] },
        })
      : this.setState({ currentSale: { ...currentSale, saleDetails: [sale] } });
  };

  render() {
    const { products, filteredProducts } = this.state;
    return (
      <div className="App">
        <Filter func={this.showProducts} />
        <MenuContainer
          products={filteredProducts[0] ? filteredProducts : products}
          func={this.handleClick}
        />
        <Total currentSale={this.state.currentSale} />
        <h2>Produtos adicionados</h2>
        <CurrentSale products={this.state.currentSale.saleDetails} />
      </div>
    );
  }
}

export default App;
