import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
