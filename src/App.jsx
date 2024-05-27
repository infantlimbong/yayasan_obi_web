import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ArticlesContainer from './components/articles/ArticlesContainer';
import ArticleDetail from './components/articles/ArticleDetail';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4 pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
