import "./App.css";
import Courses from "./Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">


          <Navbar />
          <Switch>
            <Route path="/" exact component={Courses} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>



        </div>
        <Footer />

      </div>
    </Router>
  );
}
export default App;
