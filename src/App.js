import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Football from './Components/Myfootball';
import Ownform from './Components/Testform';
import Wechat from './Components/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Football/>
        <hr/>
        <Ownform/>

        <Link to='chat/12'><button>在线客服</button></Link>
      </div>
    );
  }

}

export default App;