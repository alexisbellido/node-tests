import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";


// see Nginx configuration
// compose/react-for-beginners.yml
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
