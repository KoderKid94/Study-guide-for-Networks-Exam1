import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
const links = [
  { name: "🏠 Home", path: "/" },
  { name: "Network Overview", path: "/network-overview" },
  { name: "Internet Structure", path: "/internet-structure" },
  { name: "Network Security", path: "/network-security" },
  { name: "Application Layer", path: "/application-layer" },
  { name: "Transport Protocols", path: "/transport-protocols" },
  { name: "Reliable Data Transfer", path: "/reliable-data-transfer" },
  { name: "Pipelined Protocols", path: "/pipelined-protocols" },
  { name: "TCP Overview", path: "/tcp-overview" },
  { name: "Congestion Control", path: "/congestion-control" },
  { name: "Network Layer Overview", path: "/network-layer" },
  { name: "Network Layer IP", path: "/network-layer-ip" },
  { name: "Network Layer IP 2", path: "/network-layer-ip-2" },
];

  return (
    <div className="w-64 bg-indigo-700 text-white flex flex-col shadow-xl">
      <div className="text-2xl font-bold p-6 border-b border-indigo-500">
        Study Topics
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="block p-3 rounded-lg hover:bg-indigo-600 transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

