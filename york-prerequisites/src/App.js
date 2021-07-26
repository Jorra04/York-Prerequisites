import "./App.css";
import Courses from "./Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
    <Router>
      
        <Navbar />
        <Switch>
          <Route path="/" exact component={Courses}/>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        
      
    </Router>
    <Footer />
    </div>
  );
}

const About = () => {
  return (
    <div>hi there</div>
  );
}


const Contact = () => {
  return (
    <div>hi there</div>
  );
}
export default App;
