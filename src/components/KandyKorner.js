import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews";

export const KandyKorner = () => (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );