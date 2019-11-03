import React, {useState} from "react";
import Header from "./components/Header";
import ContentView from "./components/ContentView";

const App = props => {
  const [mode,
    setMode] = useState("petitions");
  const [menuItem] = useState([
    {
      id: 1,
      title: "청명이란",
      desc: "introduce"
    }, {
      id: 2,
      title: "청원하기",
      desc: "petitions"
    }, {
      id: 3,
      title: "나의 청원",
      desc: "MyPage"
    }, {
      id: 4,
      title: "자주하는 질문",
      desc: "FAQ"
    }
  ]);

  return (
    <div className="App">
      <Header onChangeMode={mode => setMode(mode)} menu={menuItem}/>
      <ContentView mode={mode}/>
    </div>
  );
}

export default App;
