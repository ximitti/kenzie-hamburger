import { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={this.props.func}>{this.props.text}</button>;
  }
}

export default Button;
