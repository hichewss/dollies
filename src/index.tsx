import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components.css";
import AcknowledgementsPage from "./pages/AcknowledgementsPage";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AuditionPage from "./pages/AuditionPage";
import ContactPage from "./pages/ContactPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="main">
      <div className="background">
        <div className="vertical-box"></div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/audition" element={<AuditionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/acknowledgements"
              element={<AcknowledgementsPage />}
            />
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
