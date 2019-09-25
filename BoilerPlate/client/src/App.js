import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  return (
    <Router>
       
      <div >
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route component={NoMatch} />
        </Switch> 

      </div>
    </Router>
  );
}

export default App;
