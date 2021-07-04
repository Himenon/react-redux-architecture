import * as React from "react";
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from "react-router-dom";
import * as Context from "@app/context";
import { IndexPage } from "@app/containers";

export const Component = () => {
  const history = createBrowserHistory();
  return (
    <Context.IndexPageProvider>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <IndexPage.Component />
          </Route>
        </Switch>
      </Router>
    </Context.IndexPageProvider>
  );
};
