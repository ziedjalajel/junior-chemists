import { Route, Switch } from "react-router";

//components
import UsernameForm from "./components/Forms/UsernameForm";
import Questions from "./components/Questions/Questions";
import Team from "./components/Teams/Team";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/quiz">
        <Questions />
      </Route>
      <Route path="/user">
        <UsernameForm />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
