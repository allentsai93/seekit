import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import { Provider } from 'react-redux';

function App({store} : any) {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
