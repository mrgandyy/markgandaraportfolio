import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WorldDetails from './pages/WorldDetails';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/world/:slug" element={<WorldDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
