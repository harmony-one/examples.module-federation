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
        url="https://63ee1fc8dc80a524ca0323cc--live-streaming-1country.netlify.app/exports.js"
        scope="live"
        module="./App"
      />
    </div>
  );
}

export default App;
