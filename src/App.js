import './pages/style.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Skills } from './pages/skills';
import { Portfolio } from './pages/portfolio';
import { Contact } from './pages/contact';
import { Navbar } from './pages/nav';
import { Footer } from './pages/footer';

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

