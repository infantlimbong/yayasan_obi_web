import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ArticlesContainer from './components/articles/ArticlesContainer';
import ArticleDetail from './components/articles/ArticleDetail';
import Articles from './components/articles/Articles';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="md:px-24 pt-24 min-h-screen flex justify-center">
        <section className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/admin/articles" element={<Articles />} />
          </Routes>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
