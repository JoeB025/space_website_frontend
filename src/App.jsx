import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Planets from "./components/Planets/Planets";
import ArticlesById from "./components/Articles/IndividualArticles/ArticlesById";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/articles/:article_id" element={<ArticlesById />} />
      </Routes>
    </>
  );
}

export default App;
