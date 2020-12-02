import React from "react";
import { Switch, Route } from "react-router-dom";
import Join from "../src/pages/Join/Join";
import Chat from "../src/pages/Chat/Chat";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </>
  );
}

export default App;
