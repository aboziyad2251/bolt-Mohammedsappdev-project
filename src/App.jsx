import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home';
    import Users from './pages/Users';
    import Navbar from './components/Navbar';

    function App() {
      return (
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      );
    }

    export default App;
