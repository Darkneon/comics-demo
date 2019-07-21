import React from 'react';
import './App.css';
import { withConnectHome } from "./pages/Home/Home";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
      <Router>
        <Route path="/" component={withConnectHome} />
      </Router>
  );
}

export default App;
