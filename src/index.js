import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter  } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)
console.log('1')
console.log('2')

root.render(
  <React.StrictMode>
    <HashRouter
      // basename={process.env.PUBLIC_URL}
      hashType={'noslash'}
    >
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
