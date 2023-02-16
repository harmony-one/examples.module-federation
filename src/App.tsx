import React from 'react';
import { DynamicApp } from 'Remote/DynamicApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        111
      </header>
      <DynamicApp
        url="https://live.0.country/exports.js"
        scope="live"
        module="./App"
      />
    </div>
  );
}

export default App;
