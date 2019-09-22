import React, {Component} from 'react';
import './App.css';
import WordCard from './WordCard';

class App extends Component {
  render() {
    return (
    <div className = "App-header" >
        <WordCard value="hello"/>
        <h1 style={{ color: 'Tomato' }}>SAWALEE KHONGYUEN 5935512054</h1>
    </div>
    );
  }
}

export default App;