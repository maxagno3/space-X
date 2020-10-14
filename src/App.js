import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import Upcoming from "./components/Upcoming";
import Past from "./components/Past";
import FilterByDate from "./components/FilterByDate";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/past" component={Past} />
        <Route path="/:startDate&:endDate" component={FilterByDate} />
        <Route path="/" component={DashBoard} />
      </Switch>
    </>
  );
}

export default App;
