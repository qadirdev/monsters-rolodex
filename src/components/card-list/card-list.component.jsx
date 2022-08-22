import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster)=>(
             <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
