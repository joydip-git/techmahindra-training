import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import DashBoard from '../../components/common/dashboard/DashBoard';
import RouteNavigator from '../../routes/RouteNavigator';

function App() {
  const design = (
    <Router>
      <DashBoard />
      <RouteNavigator />
    </Router>
  )
  return design;
}

export default App;
