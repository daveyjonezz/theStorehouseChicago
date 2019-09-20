import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"
import Section from "./components/Section"

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Wrapper>
            <Section>
            <h1>Such Adorableness</h1>
            </Section>
            <Section>
            <h1>Boring</h1>
            </Section>
            <Section>
            <h1>SO FWUFFY AWWW</h1>
            </Section>

          </Wrapper>

        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
