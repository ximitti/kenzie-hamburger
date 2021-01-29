import { Component } from "react";
import Product from "../Product";
import "../MenuContainer/style.css";

class CurrentSale extends Component {
  render() {
    return (
      <div className="menu">
        {this.props.products.map((item, index) => {
          return <Product key={index} item={item} button={false} />;
        })}
      </div>
    );
  }
}

export default CurrentSale;
