import React, { Component } from 'react'
import './App.css'
import { Map } from './Map'
import dotenv from 'dotenv'
dotenv.config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    )
  }
}

export default App
