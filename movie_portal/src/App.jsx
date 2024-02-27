import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
