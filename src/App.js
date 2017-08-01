import React, { Component } from "react";
import Init from "./components/Init";
import SearchContainer from './containers/SearchContainer';
import WidgetsContainer from './containers/WidgetsContainer';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
  font-family: 'Roboto';
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Init />
        <SearchContainer />
        <WidgetsContainer />
      </div>
    );
  }
}

export default App;
