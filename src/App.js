import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import Experience from "./screens/Experince/Experience";
import Loader from "./components/Loader/Loader";
import Work from "./screens/Work/Work";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./screens/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // React.useEffect(() => {
  //   window.addEventListener("resize", function() {
  //     if (window.innerWidth > 1000 || window.innerWidth < 1000) {
  //       console.log(1);
  //       window.location.reload();
  //     }
  //   });
  // });

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
