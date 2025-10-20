import React from "react";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <BookOpen className="w-7 h-7 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-800">
          Computer Networks Study Guide
        </h1>
      </div>
      <p className="text-gray-500 text-sm font-medium">
        University of Texas at Dallas | CS 4390
      </p>
    </header>
  );
}

