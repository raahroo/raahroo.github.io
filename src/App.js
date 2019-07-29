import React from 'react';
import logo from './logo.svg';
import { askForPermissioToReceiveNotifications } from './push.service';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={askForPermissioToReceiveNotifications} >
          Clique aqui para receber notificações
        </button>
      </header>
    </div>
  );
}

export default App;
