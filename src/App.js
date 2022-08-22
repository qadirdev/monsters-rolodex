import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    const filtredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
          const  searchField = event.target.value.toLocaleLowerCase()
            this.setState(() =>{return {searchField}});
          }}
        />
        <h1>
          {filtredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </h1>
      </div>
    );
  }
}

export default App;
