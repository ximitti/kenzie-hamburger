import { Component } from "react";
import Product from "../Product";
import "./style.css";

class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        {this.props.products.map((item) => {
          return <Product item={item} button={true} />;
        })}
      </div>
    );
  }
}

export default MenuContainer;
