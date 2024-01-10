import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/blinkit-react/" exact>
          <Home />
        </Route>
        <Route path="/blinkit-react/checkout">
          <Checkout />
        </Route>
        <Redirect from="/" to="/blinkit-react/" />
      </Switch>
    </>
  );
};

export default App;
