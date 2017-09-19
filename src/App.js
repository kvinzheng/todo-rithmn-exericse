import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from "./TodoList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>What's going on?</h2>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
