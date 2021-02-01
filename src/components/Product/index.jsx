import { Component } from "react";
import Button from "../Button";
import "./style.css";

class Product extends Component {
  render() {
    const { name, category, price } = this.props.item;
    const { id, button, text, func } = this.props;
    return (
      <div className="product">
        <div className="card">
          <h3>{name}</h3>
          <p>{category}</p>
          <p>R$ {price}</p>
        </div>
        {button && <Button text={text} func={() => func(id)} />}
      </div>
    );
  }
}

export default Product;
