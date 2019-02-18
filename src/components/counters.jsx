import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAdd
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary bt-sm m-2">
          Reset
        </button>
        <button className="btn btn-warning bt-sm" onClick={onAdd}>
          New item
        </button>
        <table>
          <tbody>
            {counters.map(counter => (
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counters;
