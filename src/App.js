import React, { Component } from "react";
import Button from "./components/Button/Button";
import Init from "./components/Init/Init";
import SearchContainer from './containers/SearchContainer';
class App extends Component {
  render() {
    return (
      <div>
      <Init />
        <SearchContainer />
        <Button label="Название" btnName="Кликни" />
      </div>
    );
  }
}

export default App;
