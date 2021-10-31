import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import GetInfoComponent from './components/GetInfoComponent';
import HeaderComponent from './components/HeaderComponent';

import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/usersall" component = {ListUserComponent}></Route>
                          <Route path = "/get-info" component = {GetInfoComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewUserComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateUserComponent}></Route> */}
                    </Switch>
                </div>
                <br></br>
             
        </Router>
    </div>
    
  );
}

export default App;
