import React, { Fragment, useContext } from "react";
import AppContext from "../store/app-context";

function NoPage() {
  const { user } = useContext(AppContext);

  return <Fragment>{`${user}, You got nothing !`}</Fragment>;
}

export default NoPage;
