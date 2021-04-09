import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import { Footer } from "./components/footer";
import {NavBar} from "./components/nav";
import { About } from "./views/about";
import {CV} from "./views/cv"

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route exact path="/C.V">
            <CV/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
