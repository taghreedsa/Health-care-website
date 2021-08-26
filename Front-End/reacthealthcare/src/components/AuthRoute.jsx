import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Profile from './Profile';


      /* =================
         Autontication
        ================= */

export default function AuthRoute(props) {

    /*-- If the user logged in show profile page --*/
    if (props.auth.isLoggedIn) {
        return (
          <Route>
          <Profile
            setAuth={props.setAuth}
            auth = {props.auth} />
        </Route>
        );
        /*-- If the user not logged in redirect to the home page --*/
      } else {
        return (
          <Route>
            <Redirect to="/" />
          </Route>
        );
      }
    }