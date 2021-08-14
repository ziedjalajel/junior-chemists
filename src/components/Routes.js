import { Route, Switch } from "react-router";
//components
import UsernameForm from "./Forms/UsernameForm";
import Room from "./Questions/Room";
import PickExp from "./Experiments/PickExp";
import Team from "./Teams/Team";
import Home from "./Home/Home";

const Routes = ({ socket }) => {
  return (
    <Switch>
      <Route path="/rooms">
        <Room />
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
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
