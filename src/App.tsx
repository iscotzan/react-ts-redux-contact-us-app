import * as React from "react";

import "./App.scss";

// import Hello from "./components/Hello";
import StatefulHello from "./components/Hello/StatefulHello";
import logo from "./logo.svg";
import Hello from "./containers/Hello";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello />,
        <StatefulHello name="TypeScript" enthusiasmLevel={10} />,

      </div>
    );
  }
}

export default App;
