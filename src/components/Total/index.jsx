import { Component } from "react";

class Total extends Component {
  render() {
    const { saleDetails } = this.props.currentSale;
    const sum = saleDetails.reduce((acc, item) => (acc += item.price), 0);

    return <div className="total">Subtotal: R$ {sum.toFixed(2)}</div>;
  }
}

export default Total;
