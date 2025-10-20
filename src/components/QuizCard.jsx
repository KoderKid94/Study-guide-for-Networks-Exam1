import React, { useState } from "react";

export default function QuizCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 shadow-sm">
      <p className="font-medium text-gray-800 mb-2">{question}</p>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="text-sm text-indigo-600 hover:underline"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {showAnswer && (
        <p className="mt-2 text-gray-700 border-t pt-2">{answer}</p>
      )}
    </div>
  );
}

