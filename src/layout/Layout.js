import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";

function layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default layout;
