import React from "react";
import "./Navbar.css";
import { useHistory, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const handleRoute = page => {
    if (location.pathname === page) {
      return;
    } else if (page === "about") {
      history.push("/about");
    } else if (page === "home") {
      history.push("/");
    } else if (page === "experience") {
      history.push("/experience");
    } else if (page === "work") {
      history.push("/work");
    } else if (page === "contact") {
      history.push("/contact");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="Navbar"
    >
      <div className="NameCircle" onClick={() => handleRoute("home")}>
        <span className="Name"></span>
      </div>
      <div className="Navlinks">
        <span className="link" onClick={() => handleRoute("home")}>
          Home
        </span>
        <span className="link" onClick={() => handleRoute("about")}>
          About
        </span>
        <span className="link" onClick={() => handleRoute("experience")}>
          Experience
        </span>
        <span className="link" onClick={() => handleRoute("work")}>
          Work
        </span>
        <span className="link" onClick={() => handleRoute("contact")}>
          Contact
        </span>
      </div>
    </motion.div>
  );
}
