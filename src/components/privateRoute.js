import React from "react";
import { Redirect, Route } from "react-router-dom";
import * as jwt from "jsonwebtoken";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const token = jwt.decode(localStorage.getItem("token").split(" ")[1]);
      console.log("rest: ", rest);
      if (token) {
        console.log("inside token: ", token, 'isAdmin ?: ', rest.isAdmin);
        return rest.isAdmin ? (
          token.role === "admin" ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/simulator",
                state: { from: props.location }
              }}
            />
          )
        ) : (
          <Component {...props} />
        );
      }

      return (
        <Redirect
          to={{
            pathname: "/log",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);
