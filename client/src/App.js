import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HomeComponent from "./pages/home";
import AboutComponent from "./pages/about";
import SkillsComponent from "./pages/skills";
import ProjectsComponent from "./pages/projects";
import ContactComponent from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div className="contents-box">
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/about" exact component={AboutComponent} />
        <Route path="/skills" exact component={SkillsComponent} />
        <Route path="/projects" exact component={ProjectsComponent} />
        <Route path="/contact" exact component={ContactComponent} />
      </Switch>
      </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
