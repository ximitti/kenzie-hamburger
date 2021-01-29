import { Component } from "react";

class Total extends Component {
  render() {
    const { saleDetails } = this.props.currentSale;
    const sum = saleDetails.reduce((acc, item) => (acc += item.price), 0);

    return <div>Subtotal: R$ {sum}</div>;
  }
}

export default Total;
