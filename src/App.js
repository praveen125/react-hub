import "./App.css";
// import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Sign from "./components/Sign";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Sign" component={Sign} />
          <Route path="/Contacts" component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
