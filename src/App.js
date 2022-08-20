import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=> this.setState(()=>{
           return{monsters:users}
         } ))
  };

  render() {
    return (
      <div className="App">
      <input className="search-box" type="search" placeholder="Search Monsters" onChange={(event)=>{console.log(event)}}/>
        <h1>
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </h1>
      </div>
    );
  }
}

export default App;
