import React from "react";
import TopicCard from "../components/TopicCard";
import QuizCard from "../components/QuizCard";
import { studyData } from "../data/studyData";
import { Link } from "react-router-dom";

export default function CongestionControl() {
  const data = studyData.congestionControl;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>

      <a
        href={`/${data.pdf}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        📘 Download Slides
      </a>

      {data.sections.map((section, idx) => (
        <TopicCard key={idx} title={section.title} details={section.points} />
      ))}

      <h2 className="text-2xl font-bold text-gray-800 mt-8">Cross Links</h2>
      {data.crossLinks.map((link, idx) => (
        <Link key={idx} to={link.path} className="block text-indigo-600 hover:underline">
          {link.label}
        </Link>
      ))}

      <h2 className="text-2xl font-bold text-gray-800 mt-8">Quick Quiz</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.quiz.map((q, idx) => (
          <QuizCard key={idx} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

