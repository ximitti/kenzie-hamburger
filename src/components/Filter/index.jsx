import { Component } from "react";
import "./style.css";

class Filter extends Component {
  render() {
    return (
      <div>
        <input
          className="filter"
          placeholder="Pesquisar"
          type="text"
          onChange={(event) => this.props.func(event.target.value)}
        />
      </div>
    );
  }
}

export default Filter;
