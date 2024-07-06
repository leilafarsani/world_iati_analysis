import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import DataqualityPage from './pages/DataqualityPage';
import Dashboard from './Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
      <Router>
          <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow pt-16">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/dashboard/:countryCode" element={<Dashboard />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/tools" element={<ToolsPage />} />
                      <Route path="/dataquality" element={<DataqualityPage />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
};

export default App;


