import { Component } from "react";
import "./style.css";

class Total extends Component {
  render() {
    const { total } = this.props;

    return <div className="total">Subtotal: R$ {total}</div>;
  }
}

export default Total;
