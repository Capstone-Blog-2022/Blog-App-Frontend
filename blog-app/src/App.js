import './App.css';
import Login from '../components/login'
import React from 'react';

class App extends React.Component() {
  render() {
    return (
      <div className="App">
        <li> {Login} </li>
      </div>
    );
  }
}

export default App;
