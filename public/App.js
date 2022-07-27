import { Routes, Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
