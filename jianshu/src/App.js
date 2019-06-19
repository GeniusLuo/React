import React, {Fragment} from 'react';
import {GlobalStyle} from "./style";
import Header from "./common/header";
import {GlobalStyleIconfont} from "./statics/iconfont/iconfont";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <GlobalStyleIconfont/>
      <Header/>
    </Fragment>
  );
}

export default App;
