import * as React from "react";
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from "react-router-dom";
import * as PagesContext from "@app/context/pages";
import * as Container from "@app/containers";

export const Component = () => {
  const history = createBrowserHistory();
  return (
    <PagesContext.IndexPage.Provider>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Container.Pages.IndexPage.Component />
          </Route>
        </Switch>
      </Router>
    </PagesContext.IndexPage.Provider>
  );
};
