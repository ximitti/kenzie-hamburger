import { Component } from "react";
import Button from "../Button";
import "./style.css";

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="card">
          <h3>{this.props.item.name}</h3>
          <p>Categoria: {this.props.item.category}</p>
          <p>Preço: R$ {this.props.item.price}</p>
        </div>
        {this.props.button && (
          <Button
            text="Adicionar"
            func={() => this.props.func(this.props.item.id)}
          />
        )}
      </div>
    );
  }
}

export default Product;
