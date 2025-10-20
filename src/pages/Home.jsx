import React from "react";
import { Link } from "react-router-dom";
import { studyData } from "../data/studyData";

export default function Home() {
  const topics = Object.values(studyData);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to the Networks Study Guide
      </h1>
      <p className="text-gray-600 mb-6">
        Explore summaries, cross-links, and quick quizzes for each major
        Computer Networks topic below.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic, idx) => (
          <Link
            key={idx}
            to={`/${topic.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-indigo-600"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {topic.title}
            </h2>
            <p className="text-gray-600 text-sm">
              Includes summaries, quiz cards, and cross-references.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

