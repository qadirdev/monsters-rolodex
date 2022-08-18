import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        {id:'1', name: "shahram" },
        {id:'2', name: "shahram's father" },
        {id:'3', name: "shahram's child" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.monster.map((monster)=>{
          return(<h1 key={monster.id}>{monster.name}</h1>)
        }
        )}</h1>
      </div>
    );
  }
}

export default App;
