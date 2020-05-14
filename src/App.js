import React, { useState } from "react";
import logo from "./logo.svg";
import { SAGE2App, useSAGE2AppStateValue } from "./useSAGE2AppState";
// import './App.css';

console.log("APP LOADED", window);

function App() {
  return (
    <SAGE2App
      initialState={{
        count: 0,
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ComponentUsingState />
        </header>
      </div>
    </SAGE2App>
  );
}

function ComponentUsingState() {
  let [count, setCount] = useSAGE2AppStateValue("count");

  console.log("app state", count);

  return (
    <div>
      Count: {count} <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
}

export default App;
