import React from "react";

export default function TopicCard({ title, details }) {
  return (
    <div className="bg-white border-l-4 border-indigo-600 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {details.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

