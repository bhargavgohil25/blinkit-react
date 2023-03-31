import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </>
  );
};

export default App;
