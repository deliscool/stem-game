import React from "react"
import { Switch, Route } from "react-router-dom"
// // import axios from "axios"
import Resources from "./Resources"
import Game from "./Game"
import Player from "./Player"
import NavBar from "./NavBar"


//NOTE:  in react-router-dom "Switch" has now changed to "Routes"

function App() {

  return (

    <div>

      <NavBar />

      <Switch>

        <Route exact path="/">
          <Resources />
        </Route>

        <Route path="/game">
          <Game />
        </Route>

        <Route path="/player">
          <Player />

        </Route>

      </Switch>

    </div>
  );
}
export default App;
