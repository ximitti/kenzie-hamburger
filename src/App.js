import { Component } from "react";
import "./App.css";
import Board from "./components/Board";
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
    currentSale: { total: "0.00", saleDetails: [] },
  };

  showProducts = (text) => {
    const { products } = this.state;
    const re = new RegExp([text.toLowerCase("en_US")]);
    const filter = products.filter(({ name, category }) => {
      return (
        re.test(name.toLowerCase("en_US")) ||
        re.test(category.toLowerCase("en_US"))
      );
    });
    this.setState({ filteredProducts: filter });
  };

  removeProduct = (productId) => {
    const { currentSale } = this.state;
    const { saleDetails } = currentSale;
    const newSaleDetails = saleDetails.filter(
      (item, index) => index !== productId
    );
    const sumTotal = newSaleDetails.reduce((sum, { price }) => sum + price, 0);
    this.setState({
      currentSale: { total: sumTotal.toFixed(2), saleDetails: newSaleDetails },
    });
  };

  handleClick = (productId) => {
    const { products, currentSale } = this.state;
    const { saleDetails } = currentSale;

    const sale = products.find((item, index) => {
      return index === productId;
    });
    const sumTotal = saleDetails.reduce(
      (sum, item) => sum + item.price,
      sale.price
    );

    this.setState({
      currentSale: {
        saleDetails: [...saleDetails, sale],
        total: sumTotal.toFixed(2),
      },
    });
  };

  render() {
    const { products, filteredProducts, currentSale } = this.state;
    return (
      <div className="App">
        <Board>
          <h1>Kenzie Burger's</h1>
          <Filter func={this.showProducts} />
          <h2>Cardápio:</h2>
          <MenuContainer
            products={filteredProducts[0] ? filteredProducts : products}
            func={this.handleClick}
          />
          <Total total={currentSale.total} />
          {currentSale.saleDetails[0] && <h2>Produtos adicionados</h2>}
          <CurrentSale
            products={currentSale.saleDetails}
            func={this.removeProduct}
          />
        </Board>
      </div>
    );
  }
}

export default App;
