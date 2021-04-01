import React, { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import NoMatch from "./Component/NoMatch/NoMatch";
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  }, []);

  return (
    <>
      {
        loading ?

        <div className="proLoading">
          <PacmanLoader color={"#ff5200"} loading={loading} size={50} />
        </div>

        :
        
      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="*"  component={NoMatch}></Route>
        </Switch>
      </Router>

      }
      
    </>
  );
}

export default App;
