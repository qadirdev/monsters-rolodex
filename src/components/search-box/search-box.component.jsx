import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    const {onSearchChange} = this.props
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
      </div>
    )
  }
}
