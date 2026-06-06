import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WorldDetails from './pages/WorldDetails'; // We'll keep the file name to prevent import issues, but conceptually it's ProjectDetails

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<WorldDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
