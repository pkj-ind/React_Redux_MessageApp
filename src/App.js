import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppWrapper from './react-reducx-provider-connection'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AppWrapper />
    </div>
  );
}

export default App;
