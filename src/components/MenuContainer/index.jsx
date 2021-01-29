import { Component } from "react";
import Product from "../Product";
import "./style.css";

class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        {this.props.products.map((item, index) => {
          return (
            <Product
              key={index}
              item={item}
              func={this.props.func}
              button={true}
            />
          );
        })}
      </div>
    );
  }
}

export default MenuContainer;
