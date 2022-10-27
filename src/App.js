import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'Usama';
  render() {
    return (
      <div>
        Hello My first class base component {this.c}
      </div>
    )
  }
}

