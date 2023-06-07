import "./App.css";
//importamos para rutear
import { Route, useLocation } from "react-router-dom/cjs/react-router-dom.min";
//Importamos views
import { Detail, Form, Home, Landing } from './views';
//importamos components
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  const location = useLocation();


  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/detail/:id" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/aboutme" render={() => <AboutMe />} />
    </div>
  );
}

export default App;
