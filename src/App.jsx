import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import DayView from './DayView';
export default App;
function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/day/:day" component={DayView} />
            <Route path="/" component={DayView} />
          </Switch>
        </div>
      </Router>
    );
  }