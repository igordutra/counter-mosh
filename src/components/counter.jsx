import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Props Aqui", this.props);
    return (
      <tr>
        <td>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Decrement
          </button>
        </td>
        <td>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </td>
        <td>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
        </td>
        <td className="p-2"> {this.props.counter.description} </td>
        <td>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      </tr>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
