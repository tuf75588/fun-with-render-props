import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import If from './components/If';
import For from './components/For';

class App extends Component {
  state = {
    input: '',
    emojis: [
      {
        img: '😸',
        label: 'smiling cat'
      },
      {
        img: '🎉',
        label: 'tada'
      },
      {
        img: '💩',
        label: 'poop'
      }
    ]
  };
  handleChange = ({ target: { value } }) => {
    this.setState(() => ({
      input: value
    }));
  };
  addEmoji = (event) => {
    event.preventDefault();
    this.setState((state, props) => {
      return {
        emojis: [...state.emojis, { img: this.state.input, label: 'new emoji' }],
        input: ''
      };
    });
  };
  render() {
    const { emojis } = this.state;
    return (
      <div className='App'>
        <For
          in={emojis}
          render={(emoji, key) => (
            <span key={key} role={emoji.label} aria-label='emoji img'>
              {emoji.img}
            </span>
          )}
        />

        <form onSubmit={this.addEmoji}>
          <label htmlFor=''>Add an Emoji!</label>
          <input type='text' placeholder='emoji...' onChange={this.handleChange} value={this.state.input} />
          <div>
            <button type='submit'>
              <span role='img' aria-label='emoji'>
                Add me! 💖💘
              </span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
