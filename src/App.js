import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
//메뉴
import Home     from './components/Home';
import AboutMe  from './components/AboutMe';
import Skills   from './components/Skills';
import Contect  from './components/Contect';
//부트스트랩 적용
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <Router>
      <div className="Menu">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/AboutMe">AboutMe</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Contect">Contect</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Skills' component={Skills} />
      <Route path='/Contect' component={Contect} />
    </Router>
  );
}

export default App;
