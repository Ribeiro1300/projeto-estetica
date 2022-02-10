import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewWithdraw from "./pages/NewWithdraw";
import Records from "./pages/Records";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/newEntry" element={<NewEntry />} />
        <Route path="/newWithdraw" element={<NewWithdraw />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
