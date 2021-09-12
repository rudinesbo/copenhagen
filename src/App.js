import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CSSTransition } from "react-transition-group";
import "./App.css";

import Home from "./components/Home";
import Toilets from "./components/Toilets";
import Weather from "./components/Weather";
import background from "./media/copenhagen_street_16_9.jpg";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <img
            src={background}
            className="app-background"
            alt="Man brushing his teeth out the window on the streets of Copenhagen"
          />
          <Route path="/" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Home />
                </div>
              </CSSTransition>
            )}
          </Route>
          <Route path="/toilets">
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="toilet-page"
                unmountOnExit
              >
                <div className="toilet-page">
                  <Toilets />
                </div>
              </CSSTransition>
            )}
          </Route>
          <Route path="/weather">
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="weather-page"
                unmountOnExit
              >
                <div className="weather-page">
                  <Weather />
                </div>
              </CSSTransition>
            )}
          </Route>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
