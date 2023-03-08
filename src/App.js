import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListComponent from './components/ListComponent';
import CreateComponent from './components/CreateComponent';
import ViewComponent from './components/ViewComponent';
import UpdateComponent from './components/UpdateComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListComponent}></Route>
                          <Route path = "/books" component = {ListComponent}></Route>
                          <Route path = "/add/:id" component = {CreateComponent}></Route>
                          <Route path = "/edit/:id" component = {UpdateComponent}></Route>
                          <Route path = "/view/:id" component = {ViewComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
