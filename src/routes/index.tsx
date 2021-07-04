import * as React from "react";
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from "react-router-dom";
import * as Context from "@app/context";
import * as Container from "@app/containers";

export const Component = () => {
  const history = createBrowserHistory();
  return (
    <Context.IndexPage.Provider>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Container.IndexPage.Component />
          </Route>
        </Switch>
      </Router>
    </Context.IndexPage.Provider>
  );
};
