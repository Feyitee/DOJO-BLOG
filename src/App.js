import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Home />
            </Route>
            <Create />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
