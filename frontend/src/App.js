import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopPolls from "./components/TopPolls/TopPolls";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/polls" component={TopPolls} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
