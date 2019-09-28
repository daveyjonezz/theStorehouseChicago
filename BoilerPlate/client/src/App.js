import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Stories from "./pages/Stories"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav"
import Merch from "./pages/Merch.js"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  return (
    <Router>
       
      <>
      
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/merch" component={Merch} />
          <Route component={NoMatch} />
        </Switch> 

      </>
    </Router>
  );
}

export default App;
