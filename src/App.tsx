import { useCallback, useEffect, useState } from "react";
import { Routes } from "react-router";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import routes from "route";
import NavBar from "components/NavBar";
import { Options } from "data/particles";

import "./App.scss";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {routes.map((props, index) => (
            <Route {...props} key={index} />
          ))}
        </Routes>
        {init ? <Particles id="tsparticles" options={Options} /> : null}
      </Router>
    </div>
  );
}

export default App;
