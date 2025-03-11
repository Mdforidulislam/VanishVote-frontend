// src/main.tsx (Entry Point)
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Poll from "./pages/Poll";
import PollResultsPage from "./pages/PullResultpage";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll/:id" element={<Poll />} />
        <Route path="/pull-result" element={<PollResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
