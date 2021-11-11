import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Game from "./Game"
import QuestionCard from "./QuestionCard"
import Learn from "./Learn"
import NavBar from "./NavBar"



function App() {

  return (

    <div>

      <NavBar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/game">
          <Game />
          <QuestionCard/>
        </Route>

        <Route path="/learn">
          <Learn />
        </Route>

      </Switch>

    </div>
  );
}
export default App;
