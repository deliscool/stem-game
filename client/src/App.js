import React from "react"
import { Switch, Route } from "react-router-dom"
// // import axios from "axios"
import Home from "./Home"
import Game from "./Game"
import Learn from "./Learn"
import NavBar from "./NavBar"


//NOTE:  in react-router-dom "Switch" has now changed to "Routes"

function App() {

  return (

    <div>

      <NavBar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/learn">
          <Learn />
        </Route>

        <Route path="/game">
          <Game />
        </Route>
      </Switch>

    </div>
  );
}
export default App;
