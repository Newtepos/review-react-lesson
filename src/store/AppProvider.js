import React from "react";
import AppContext from "./app-context";

function AppProvider(props) {
  const user = {
    user: "Supakit",
  };

  return (
    <AppContext.Provider value={user}>
        {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
