import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import GlobalStyle from './style';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/login' exact component={Login}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
