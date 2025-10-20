// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ApplicationLayer from "./pages/ApplicationLayer";
import TransportProtocols from "./pages/TransportProtocols";
import ReliableDataTransfer from "./pages/ReliableDataTransfer";
import TCPOverview from "./pages/TCPOverview";
import CongestionControl from "./pages/CongestionControl";
import NetworkLayer from "./pages/NetworkLayer";
import NetworkSecurity from "./pages/NetworkSecurity";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        {/* Fixed Sidebar */}
        <Sidebar />
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-8 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/application-layer" element={<ApplicationLayer />} />
              <Route path="/transport-protocols" element={<TransportProtocols />} />
              <Route path="/reliable-data-transfer" element={<ReliableDataTransfer />} />
              <Route path="/tcp-overview" element={<TCPOverview />} />
              <Route path="/congestion-control" element={<CongestionControl />} />
              <Route path="/network-layer" element={<NetworkLayer />} />
              <Route path="/network-security" element={<NetworkSecurity />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

