import React, { Component } from "react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import SearchContainer from './containers/SearchContainer';
class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <SearchContainer />
        <Button label="Название" btnName="Кликни" />
      </div>
    );
  }
}

export default App;
