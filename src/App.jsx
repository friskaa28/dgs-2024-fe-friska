import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './constants/HeaderContainer'; // Existing import
import Home from './pages/Home';
import Sidebar from './components/SidebarView'; // Existing import
import Modal from './components/Modal';
import TransactionList from './components/TransactionList'; // Updated import

const App = () => {
  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar dengan setIsModalOpen diteruskan sebagai props */}
          <Sidebar setIsModalOpen={setIsModalOpen} />

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add Route for TransactionList */}
              <Route path="/transactions" element={<TransactionList />} />
            </Routes>
          </div>
        </div>

        {/* Render modal jika isModalOpen true */}
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        )}
      </div>
    </Router>
  );
};

export default App;
