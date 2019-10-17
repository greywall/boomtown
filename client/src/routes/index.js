import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../pages/Home";
import Items from "../pages/Items";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import Menubar from "../components/Menubar";

export default () => {
  return (
    <Fragment>
      <Menubar />
      <Switch>
        <Route path="/welcome" component={Home} />
        <Route path="/share" component={Share} />
        <Route path="/items" component={Items} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Redirect from="*" to="/items" />
      </Switch>
    </Fragment>
  );
};
