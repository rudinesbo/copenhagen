import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./components/Home";
import Toilets from "./components/Toilets";
import PageNotFound from "./components/PageNotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/toilets" component={Toilets} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}
