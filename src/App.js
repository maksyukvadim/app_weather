import React, { Component } from "react";
import Init from "./components/Init";
import SearchContainer from './containers/SearchContainer';
import WidgetsContainer from './containers/WidgetsContainer';
import GeolocationContainer from './containers/GeolocationContainer';
import LocalizationContainer from './containers/LocalizationContainer';
import { injectGlobal } from 'styled-components';
import globalCss from './GlobalCss';

injectGlobal`
  ${ globalCss }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Init />
        <GeolocationContainer />
        <SearchContainer />
        <WidgetsContainer />
        <LocalizationContainer />
      </div>
    );
  }
}

export default App;
