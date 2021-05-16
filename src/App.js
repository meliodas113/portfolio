import "./App.css";
import React, { useState, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import("./screens/Home/Home"));
const About = lazy(() => import("./screens/About/About"));
const Navbar = lazy(() => import("./components/NavBar/Navbar"));
const Experience = lazy(() => import("./screens/Experince/Experience"));
const Loader = lazy(() => import("./components/Loader/Loader"));
const Work = lazy(() => import("./screens/Work/Work"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const Contact = lazy(() => import("./screens/Contact/Contact"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <AnimatePresence>
          <Loader />
        </AnimatePresence>
      ) : (
        <>
          {window.innerWidth > 1000 ? <Navbar /> : <Sidebar />}
          <AnimatePresence>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/experience" component={Experience} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
