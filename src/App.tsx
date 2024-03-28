import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchArticles from "./Components/FetchArticles";
import NavbarArticle from "./Components/Navabar";
import ArticleDetails from "./Components/ArticleDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarArticle />
        <Routes>
          <Route path="/" element={<FetchArticles />} />

          <Route path="/details/:articleId" element={<ArticleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
