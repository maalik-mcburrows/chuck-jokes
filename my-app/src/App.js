import React from 'react';
import Quote from './components/quote'
import './App.css';

function App() {
  const thisQuote = "Stay in the crib :("
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chuck Says...</h1>
      </header>
      <Quote quote={ thisQuote } />
    </div>
  );
}

export default App;
