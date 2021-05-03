import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Movie extends Component {
  state = {
    counter: 0,
    data: [
      {
        company: "Twitter Inc",
        ticker: "TWTR",
        stockPrice: "22.76 USD",
        id: 1,
      },
      {
        company: "Square Inc",
        ticker: "SQ",
        stockPrice: "45.28 USD",
        id: 2,
      },
      {
        company: "Shopify Inc",
        ticker: "SHOP",
        stockPrice: "341.79 USD",
        id: 3,
      },
      {
        company: "Sunrun Inc",
        ticker: "RUN",
        stockPrice: "9.87 USD",
        id: 4,
      },
      {
        company: "Adobe Inc",
        ticker: "ADBE",
        stockPrice: "300.99 USD",
        id: 5,
      },
      {
        company: "HubSpot Inc",
        ticker: "HUBS",
        stockPrice: "115.22 USD",
        id: 6,
      },
    ],
  };

  constructor() {
    super();
    this.Increment = this.Increment.bind(this);
    // this.delRow = this.delRow.bind(this, this.item);
  }

  Increment() {}
  /*
  delRow(index) {
    // console.log(index);
    const datas = this.state.data.filter((i) => i.company !== index.company);
    this.setState({ datas });
  }
  */

  delRow = (index) => {
    console.log(index);
    const data = this.state.data.filter((i) => i.id !== index.id);
    this.setState({ data });
  };

  info = this.state.data.map((d) => {
    const buildTable = {
      display: "grid",
      gridTemplateRows: "14% 14% 14% 14% 14% 14%",
      gridTemplateColumns: "15% 15% 15% 15% 15% 15%",
    };

    const alignCell = {
      paddingBottom: "2rem",
      marginRight: "1rem",
    };
    return (
      <div className='row' style={buildTable} key={d.company}>
        <div className='btn btn-dark btn-lg' style={alignCell}>
          {/* {this.setState({ counter: this.state.counter + 1 })} */}
          {d.id}
        </div>
        <div className='btn btn-primary btn-lg' style={alignCell}>
          {d.company}
        </div>
        <div className='btn btn-primary btn-lg' style={alignCell}>
          {d.ticker}
        </div>
        <div className='btn btn-primary btn-lg' style={alignCell}>
          {d.stockPrice}
        </div>
        <div className='btn btn-primary btn-lg' style={alignCell}>
          {d.id}
        </div>
        <div
          className='btn btn-danger btn-lg'
          style={alignCell}
          // onClick={() => this.delRow.bind(this, d.company)}
          onClick={() => this.delRow(d)}
        >
          Delete
        </div>
      </div>
    );
  });

  render() {
    const bringToCenter = {
      border: "4px solid gold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div>
        <div className='display-1' style={bringToCenter}>
          {" "}
          Total no of entries are:{" "}
          <span className='badge badge-success'>{this.state.data.length}</span>
        </div>
        <div className='App container' style={bringToCenter}>
          <div> {this.info} </div>
        </div>
      </div>
    );
  }
}
export default Movie;
