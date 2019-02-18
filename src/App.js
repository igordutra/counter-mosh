import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
        description: "Apples"
      },
      {
        id: 2,
        value: 0,
        description: "Bananas"
      },
      {
        id: 3,
        value: 0,
        description: "Oranges"
      },
      {
        id: 4,
        value: 0,
        description: "Clementines"
      }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0
      ? counters[index].value--
      : (counters[index].value = 0);
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    alert("Are you sure?");
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });
  };

  handleAdd = () => {
    console.log("Add a new item");
    const counters = [...this.state.counters];
    const maxValue = Math.max.apply(
      Math,
      counters.map(o => {
        return o.id;
      })
    );
    counters.push({
      id: maxValue + 1,
      value: 0,
      description: "Edit"
    });
    console.dir(maxValue);

    this.setState({
      counters
    });
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />{" "}
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />{" "}
        </main>{" "}
      </>
    );
  }
}

export default App;
