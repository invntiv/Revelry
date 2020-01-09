import "./App.css";

import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/SignInAndSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
