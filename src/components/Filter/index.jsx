import { Component } from "react";
import Button from "../Button";

class Filter extends Component {
  state = { text: "" };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
        />
        <Button
          text="Pesquisar"
          func={() => this.props.func(this.state.text)}
        />
      </div>
    );
  }
}

export default Filter;
