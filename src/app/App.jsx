import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Transactions from "../pages/Transactions.jsx";
import Error from "../pages/Error.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
