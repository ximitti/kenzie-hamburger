import { Component } from "react";
import Product from "../Product";

class CurrentSale extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((item) => {
          return <Product item={item} button={false} />;
        })}
      </div>
    );
  }
}

export default CurrentSale;
