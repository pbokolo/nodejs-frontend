import Header from "./components/Header";

import Home from "./pages/Home";

import Stuff from "./pages/Stuff";

import Lost from "./pages/Lost";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/stuff" element={<Stuff />} />
          <Route exact path="*" element={<Lost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
