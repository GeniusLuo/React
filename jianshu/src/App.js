import React, {Fragment} from 'react';
import {GlobalStyle} from "./style";
import Header from "./common/header";
import {GlobalStyleIconfont} from "./statics/iconfont/iconfont";
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./page/home";
import Detail from "./page/detail/detail";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <GlobalStyleIconfont/>
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
