import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";

export const KandyKorner = () => (
    <>
     <Route path="/register">
      <ApplicationViews />
    </Route>
    </>
  );