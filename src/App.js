import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(){
    super()
    this.state = {
      name : 'Qadir'
    }
  };
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hey {this.state.name}</p>
      </header>
    </div>
  )
  }
};

export default App;
