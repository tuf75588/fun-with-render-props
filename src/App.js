import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import If from './components/If';
import For from './components/For';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <For in={['💩', '🤠', '🎃', '😡']} render={(emoji) => <h1 key={emoji}>{emoji}</h1>} />
      </div>
    );
  }
}

export default App;
