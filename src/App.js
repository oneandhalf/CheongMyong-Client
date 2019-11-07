import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import MyPage from "./components/MyPage";
import FAQ from "./components/FAQ";
import FieldView from "./components/FieldView";
import RecommendView from "./components/RecommendView";
import ReplyView from "./components/ReplyView";

const App = props => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Fragment>
            <div className="view-comp">
              <Route exact path="/" component={Introduce}/>
              <Route path="/field" component={FieldView}/>
              <Route path="/recommend" component={RecommendView}/>
              <Route path="/reply" component={ReplyView}/>
              <Route path="/user" component={MyPage}/>
              <Route path="/questions" component={FAQ}/>
            </div>
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
