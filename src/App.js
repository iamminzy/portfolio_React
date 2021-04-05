import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contect from './components/Contect';

function App() {
  return (
    <Router>
      <div>
        <button><Link to="/AboutMe">AboutMe</Link></button>
        <button><Link to="/Skills">Skills</Link></button>
        <button><Link to="/Contect">Contect</Link></button>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Skills' component={Skills} />
      <Route path='/Contect' component={Contect} />
    </Router>
  );
}

export default App;
