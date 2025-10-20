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
import NetworkOverview from "./pages/NetworkOverview";
import InternetStructure from "./pages/InternetStructure";
import PipelinedProtocols from "./pages/PipelinedProtocols";
import NetworkLayerIP from "./pages/NetworkLayerIP";
import NetworkLayerIP2 from "./pages/NetworkLayerIP2";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-8 overflow-y-auto flex-1">
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/network-overview" element={<NetworkOverview />} />
  <Route path="/internet-structure" element={<InternetStructure />} />
  <Route path="/network-security" element={<NetworkSecurity />} />
  <Route path="/application-layer" element={<ApplicationLayer />} />
  <Route path="/transport-protocols" element={<TransportProtocols />} />
  <Route path="/reliable-data-transfer" element={<ReliableDataTransfer />} />
  <Route path="/pipelined-protocols" element={<PipelinedProtocols />} />
  <Route path="/tcp-overview" element={<TCPOverview />} />
  <Route path="/congestion-control" element={<CongestionControl />} />
  <Route path="/network-layer" element={<NetworkLayer />} />
  <Route path="/network-layer-ip" element={<NetworkLayerIP />} />
  <Route path="/network-layer-ip-2" element={<NetworkLayerIP2 />} />
</Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

