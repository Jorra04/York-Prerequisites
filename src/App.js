import "./App.css";
import Courses from "./Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import TermsOfService from "./components/TermsOfService";
import Privacy from "./components/Privacy";
import image_404 from "./images/404.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CourseDetails from "./components/CourseDetails";
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
            <Route path="/courseDetail/:faculty/:department/:course" exact component={CourseDetails} />
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
        <div className="unknown-404-text-container">
          <h1 className="unknown-404-text-header">404 Uncharted Territory</h1>
          <p className="unknown-404-text-paragraph">The page you are looking for does not exist!</p>
        </div>
        <div className="unknown-404-image-container">
          <img className="unknown-404-image" src={image_404} alt="404 background showing that the requested page does not exist"></img>
        </div>
      </div>
  );
};

export default App;