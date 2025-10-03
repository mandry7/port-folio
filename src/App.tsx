import { useCallback, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import routes from "route/index";
import NavBar from "components/NavBar";
import { Options } from "data/particles";
import type { Engine, Container } from "@tsparticles/engine";
import "./App.scss";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // no-op
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {routes.map((props, index) => (
            <Route {...props} key={index} />
          ))}
        </Routes>

        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={Options}
        />
      </Router>
    </div>
  );
}

export default App;
