import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeFirebase } from './push.service';

ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase();