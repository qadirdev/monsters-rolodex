import React, { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div>
              <Card monster={monster} />
            </div>
          );
        })}
      </div>
    );
  }
}
