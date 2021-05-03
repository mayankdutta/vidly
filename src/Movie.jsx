import React, { Component } from "react";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends Component {
  render() {
    const buildTable = {
      display: "grid",
      gridTemplateRows: "14% 14% 14% 14% 14% 14%",
      gridTemplateColumns: "15% 15% 15% 15% 15% 15%"
    };

    const alignCell = {
      paddingBottom: "2rem",
      marginRight: "1rem"
    };

    let counter= 1;
    const info = data.map((d) => {
      return (
        <div className = "row" style = {buildTable}>
          <div className = "btn btn-dark btn-lg" style = {alignCell}>{counter++}</div>
          <div className = "btn btn-primary btn-lg" style = {alignCell}>{d.company}</div>
          <div className = "btn btn-primary btn-lg" style = {alignCell}>{d.ticker}</div>
          <div className = "btn btn-primary btn-lg" style = {alignCell}>{d.stockPrice}</div>
          <div className = "btn btn-primary btn-lg" style = {alignCell}>{d.timeElapsed}</div>
          <div className = "btn btn-danger btn-lg" style = {alignCell}>Delete</div>
        </div>
      );
    });

    const bringToCenter = {
      border: "4px solid gold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <div>
        <div className = "display-1" style = {bringToCenter}> Total no of entries are: <span className = "badge badge-success">{data.length}</span></div>
        <div className='App container' style = {bringToCenter}>
          <div> {info} </div>
        </div>
      </div>
    );
  }
}
export default Movie;
