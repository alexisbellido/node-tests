import React, { Component } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

class ApiFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/planets/4/?format=json';
    // alternative with local file, relative to built Javascript
    // const url = './tatooine.json';

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        });
      }).catch(err => {
        // Do something for an error here
        console.log('error');
      });

    // basic version with longer syntax
    // fetch(url).then(response => {
    //   return response.json();
    // }).then(data => {
    //   // Work with JSON data here
    //   console.log(data);
    // }).catch(err => {
    //   // Do something for an error here
    // });

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
      <div className="ApiFetch">
        <h1>ApiFetch</h1>
        {result}
      </div>
    );
  }
}

export default ApiFetch;
