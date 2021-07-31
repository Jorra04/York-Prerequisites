import "./App.css";
import Courses from "./Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import TermsOfService from "./components/TermsOfService";
import Privacy from "./components/Privacy";
import gif_404 from "./404.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <div className="content-wrap">
          <Switch>
            <Route path="/" exact component={Courses} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="/TermsOfService" exact component={TermsOfService} />
            <Route path="/404" component={My404Component} />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const My404Component = () => {
  return (
      
      <div className="unknown-404-container">
        <div className="unknown-404-image-container">
          <h1></h1>
          <img className="unknown-404-image" src={gif_404}></img>
        </div>
      </div>
  );
};




export default App;
