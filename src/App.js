import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from "./components/Footer"
import VisibleTodoList from "./containers/VisibleTodoList"
import AddTodo from "./containers/AddTodo"

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
