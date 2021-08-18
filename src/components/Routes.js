import { Route, Switch } from "react-router";
//components
import Titration from "./Experiments/TitrationExp";
import UsernameForm from "./Forms/UsernameForm";
import PickExp from "./Experiments/PickExp";
import Explosion from "./Experiments/NaExp";
import Result from "./Results/Result";
import Room from "./Questions/Room";
import Team from "./Teams/Team";
import Test from "./Teams/Test";
import Home from "./Home/Home";

const Routes = ({ socket }) => {
  return (
    <Switch>
      <Route path="/test">
        <Test />
      </Route>
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
      <Route path="/sodium-exp">
        <Explosion />
      </Route>
      <Route path="/results">
        <Result />
      </Route>
      <Route path="/titration">
        <Titration />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
