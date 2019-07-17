import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Landing from "./pages/Landing";
import Results from "./pages/Results";
import { Provider } from "react-redux";
import { history } from "./store";

function App({ store }: any) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            {/* <Redirect exact from="/" to="/jobs" /> */}
            <Route
              exact
              path={"/jobs"}
              render={(p: any) => <Results {...p} />}
            />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
