import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { Navbar } from './pages/nav/nav';
import { Footer } from './pages/footer/footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/portoflio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

