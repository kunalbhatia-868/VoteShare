import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopPolls from "./components/TopPolls/TopPolls";
import CreatePoll from "./components/CreatePolls/CreatePoll";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/polls" component={TopPolls} />
          <Route path="/create_poll" component = {CreatePoll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
