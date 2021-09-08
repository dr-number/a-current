import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRouters, publicRouters} from "./router/Routs";

const AppRouter = () => {

  let routers, redirect
  let isAuth = true

  if(isAuth) {
    routers = privateRouters
    redirect = "/home"
  }
  else{
    routers = publicRouters
    redirect = "/login"
  }

  return (
      <Switch>
        {routers.map(route =>
          <Route component={route.component}
                 key={route.path}
                 path={route.path}
                 exact={route.exact}
          />
        )}
        <Redirect to={redirect} />
      </Switch>
  );
};

export default AppRouter;