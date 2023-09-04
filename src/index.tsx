import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components.css";
import Navbar from "./components/navbar";
import HomePage from "./HomePage";
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [clickNavBar, setClickNavBar] = useState(false);
  return (
    <div className="main">
      <div className="background">
        <Navbar />
        <div className="vertical-box">
          <HomePage />
        </div>
        <Router>
          <Routes>
            <Route path="/slay" element={<h1>Slay</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
