import React from 'react';

import logo from '@app/assets/logo.svg';

import './style.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Under construction.</p>
        <a
          className="App-link"
          href="https://github.com/lupine-moon/react.lupinemoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </header>
    </div>
  );
}

export default App;
