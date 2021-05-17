import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Stack from './Pages/Stack'
import Header from "./components/Header/Header"
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/stack" exact component={Stack}/>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
