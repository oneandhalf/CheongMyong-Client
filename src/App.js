import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import PetitionsView from "./components/PetitionsView";
import MyPage from "./components/MyPage";
import FAQ from "./components/FAQ";

const App = props => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <div className="view-comp">
            <Route exact path="/" component={PetitionsView} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/MyPage" component={MyPage} />
            <Route path="/FAQ" component={FAQ} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
