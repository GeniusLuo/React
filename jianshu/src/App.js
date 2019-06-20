import React, {Fragment} from 'react';
import {GlobalStyle} from "./style";
import Header from "./common/header";
import {GlobalStyleIconfont} from "./statics/iconfont/iconfont";
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <GlobalStyleIconfont/>
      <Provider store={store}>
        <Header/>
      </Provider>
    </Fragment>
  );
}

export default App;
