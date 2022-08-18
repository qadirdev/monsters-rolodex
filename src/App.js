import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        { name: "shahram" },
        { name: "shahram's father" },
        { name: "shahram's child" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.monster.map((monster)=>{
          return(<h1>{monster.name}</h1>)
        }
        )}</h1>
      </div>
    );
  }
}

export default App;
