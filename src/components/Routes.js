import { Route, Switch } from "react-router";
//components
import UsernameForm from "./Forms/UsernameForm";
import Room from "./Questions/Room";
import PickExp from "./Experiments/PickExp";
import Team from "./Teams/Team";
import Home from "./Home/Home";
import Result from "./Results/Result";
import Test from "./Teams/Test";

const Routes = ({ socket }) => {
  return (
    <Switch>
      <Route path="/test">
        <Test />
      </Route>
      <Route path="/rooms">
        <Room socket={socket} />
      </Route>
      <Route path="/user">
        <UsernameForm socket={socket} />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/choose-experiment">
        <PickExp />
      </Route>
      <Route path="/results">
        <Result socket={socket} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
