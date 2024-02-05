import { Routes } from "react-router";

import { Route, BrowserRouter as Router } from "react-router-dom";

import routes from "route";

import NavBar from "components/NavBar";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {routes.map((props, index) => (
            <Route {...props} key={index} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
