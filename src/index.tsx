import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components.css";
import NavBar from "./components/NavBar";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AuditionPage from "./pages/AuditionPage";
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div className="background">
        <div className="vertical-box">
          {/* <MenuBar /> */}
          {/* <HomePage /> */}
          {/* <NavBar /> */}
          {/* <ArchivePage /> */}
          <AuditionPage />
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
