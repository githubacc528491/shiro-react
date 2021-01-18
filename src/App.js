import './App.css';
import {Accueil} from "./components/Accueil/Accueil";
import {Speech} from "./components/Speech/Speech";
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
      <Router>
          <div className="App">
              <Route path="/Accueil" component={Accueil}></Route>
              <Route path="/Speech" component={Speech}></Route>
          </div>

      </Router>

  );
}

export default App;
