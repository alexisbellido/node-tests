import React, { Component } from "react";
import axios from "axios";

class ApiAxios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/planets/1/?format=json';

    axios.get(url)
      .then(result => {
        this.setState({
          data: result.data
        });
      });
  }

  render() {
    const data = this.state.data;

    const result = (
      <ul>
        <li>Name: {data.name}</li>
        <li>Terrain: {data.terrain}</li>
      </ul>
    )

    return (
      <div className="ApiAxios">
        <h1>ApiAxios</h1>
        {result}
      </div>
    );
  }
}

export default ApiAxios;
