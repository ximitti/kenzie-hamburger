import { Component } from "react";
import Product from "../Product";
import "./style.css";

class CurrentSale extends Component {
  render() {
    return (
      <div className="adicionados">
        {this.props.products.map((item, index) => {
          return (
            <Product
              key={index}
              id={index}
              item={item}
              func={this.props.func}
              button={true}
              text={"Remover"}
            />
          );
        })}
      </div>
    );
  }
}

export default CurrentSale;
