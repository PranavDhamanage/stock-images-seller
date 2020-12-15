import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header.js";
import Home from "./pages/home/home.js";
import Cart from "./pages/cart/cart.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
