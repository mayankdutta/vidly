import React, { Component } from "react";
import data from "./data.json";

class Movie extends Component {
  render() {
    // JSONdata() {
      const info = data.map((d) => {
        return (
          <div>{d.company}</div>
        );
      });
    // }
    return (
      <div className='App'>
        <h1> hello world </h1>
        <header className='App-header'></header>
        {info}
      </div>
    );
  }
}
export default Movie;
