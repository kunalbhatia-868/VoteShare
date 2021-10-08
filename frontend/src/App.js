import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopPolls from "./components/TopPolls/TopPolls";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePoll from "./components/CreatePolls/CreatePoll";
import Login from "./components/Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/polls" component={TopPolls} />
          <Route path="/create_poll" component={CreatePoll} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
