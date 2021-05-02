import React from "react";
import "./Loader.css";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacityb: 0, y: "-100%" }}
      className="Loader"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="260"
        height="292"
        fill="none"
        viewBox="0 0 260 292"
      >
        <motion.path
          stroke="#FF5E73"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
          d="M181.252 3.452l-.474-1.327H86.077l3.414 3.414 16.275 16.275L7.005 279.667l-2.462 6.426 5.523-4.106 93.604-69.594.46-.342.209-.534 4.138-10.579h70.301l4.188 12.689.453 1.373h73.386l-.954-2.673L181.252 3.452zm-44.517 125.236l9.671-24.729 8.222 24.729h-17.893zM116.961 20.544l.465-1.212-.918-.918-6.289-6.289h63.512L242.615 205h-51.966l-4.187-12.689-.453-1.373h-64.781l19.855-52.25H168.491l-.874-2.632-18.704-56.25-1.745-5.249-2.015 5.152-49.291 126.028-69.674 51.802 90.773-236.995z"
        ></motion.path>
      </svg>
    </motion.div>
  );
}
