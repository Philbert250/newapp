import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route exact path="/nav">
          <Navbar/>
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
