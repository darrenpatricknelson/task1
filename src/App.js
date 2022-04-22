import React, { useState } from 'react';
import 'isomorphic-fetch';
import './App.css';
import WeatherResults from './components/WeatherResults';
import Error from './components/Error';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
  }

  handleLocationSearch(event) {
    // this if statement is to check if the key press is the Enter key
    // Otherwise the block of code will run after each and every key press
    if (event.key === 'Enter') {
      // storing the users input (which will be the location) inside this variable
      // also replacing white spaces with '+' and convert all case to lower case
      //  the reason I am doing this is because the location variable will be put into the location part of the url on line 26
      const location = event.target.value.replaceAll(' ', '+').toLowerCase();

      // Now that I have a location that can be search along with the url
      // we can use this url in the fetch function
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=53118036333eeaefac8e1b58d9d859b7&units=metric`;

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
          // console.log(error);
        })
        .then((data) => {
          console.log(data);
          this.setState({
            isLoaded: true,
            data: data
          });
        });
    }
  }

  render() {
    return (
      <div className="app">
        {/* user input */}
        <div className="userInput">
          <input
            onKeyPress={this.handleLocationSearch}
            className="input"
            placeholder="Enter your city"
          />
        </div>

        {this.state.error && <Error messsage={this.state.errorMessage} />}
        {this.state.isLoaded && !this.state.error && (
          <WeatherResults data={this.state.data} />
        )}
      </div>
    );
  }
}

export default App;
