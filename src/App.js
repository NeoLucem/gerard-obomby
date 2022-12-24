import './App.css';
import coverImg from './assets/coverimage.jpeg'
//import {Container} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand container mt-5 bg-black" style={{height: 70, color: 'white'}}>
        <div className="container-fluid d-flex justify-content-between">
          <div className="container">
            <a className="nav-link" href="http://www.google.com" alt="link to google.com">Menu</a>
          </div>
          <div className="container">
            <a className="nav-link" href="http://www.google.com" alt="link to google.com">Gerard Obomby</a>
          </div>
          <a className="btn btn-danger" href="http://www.google.com" alt="link to google.com">Resume</a>
        </div>
      </nav>

      <div className="container hero">
        <div className="row">
          <div className="col col-lg-6">
            <span className='t1'>Hello, my name is Gerard Obomby</span>
            <p className='t2'>I'm a fullstack web developer based in Ghana, I build content for the web</p>
            <p className='t3 d-flex justify-content-start'>Got a project? <a className='btn btn-danger' style={{marginLeft: 20}} href="http://wwww.google.com">Let's Talk</a></p>
          </div>
          <div className="col col-lg-6 d-flex justify-content-center">
            <img src={coverImg} alt="Gerard"style={{width: '320px', height: '440px'}}/>
          </div>
        </div>
      </div>

      <div className='container-fluid ad'>
        <div className="row d-fex justify-content-between align-items-center">
          <div className="col">DESIGN</div>
          <div className="col">DEVELOPMENT</div>
          <div className="col">STATEGY</div>
          <div className="col">SEO</div>
        </div>
      </div>
    </div>
  );
}

export default App;
