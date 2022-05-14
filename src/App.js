import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/home";
import Income from "./Components/Pages/income";
import Expense from "./Components/Pages/expense";
import History from "./Components/Pages/history";
import Fourofour from "./Components/404";
import React from "react";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="income" element={<Income />} />
            <Route path="expense" element={<Expense />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="*" element={<Fourofour />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
