import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../Components/ui/Input";
import { label } from "framer-motion/client";
import PollModal from "../Components/modal/Modal";

const PollListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [pollType, setPollType] = useState<'checkbox' | 'yesno'>('checkbox'); // Default type to checkbox
  const [selectedPollOptions, setSelectedPollOptions] = useState({}); // Store selected options for each poll

  // Fake data for demonstration
  const fakePolls = [
    {
      id: 1,
      question: "What's your favorite programming language?",
      options: ["JavaScript", "Python", "Go", "Ruby"],
      likes: 32,
      comments: 12,
      shares: 7,
    },
    {
      id: 2,
      question: "Do you prefer dark mode or light mode?",
      options: ["Yes", "No"],
      likes: 45,
      comments: 23,
      shares: 15,
    },
  ];

  const handleOptionChange = (pollId, option) => {
    setSelectedPollOptions((prevState) => {
      const updated = { ...prevState };
      if (pollType === 'checkbox') {
        updated[pollId] = updated[pollId] ? [...updated[pollId], option] : [option];
      } else {
        updated[pollId] = [option]; // Only allow one option for yes/no
      }
      return updated;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center relative">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Polls</h2>

      {/* Poll List */}
      <div className="w-full max-w-4xl space-y-8">
        {fakePolls.map((poll) => (
          <div key={poll.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{poll.question}</h3>
              <span className="text-gray-400">2 hours ago</span>
            </div>
            <div className="space-y-2">
              {poll.options.map((option, index) => (
                <div key={index} className="flex justify-between items-center">
                  <label className="text-gray-600 flex items-center">
                    <input
                      type={pollType === 'checkbox' ? "checkbox" : "radio"}
                      name={`poll-${poll.id}`}
                      value={option}
                      checked={selectedPollOptions[poll.id]?.includes(option) || false}
                      onChange={() => handleOptionChange(poll.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(Math.random() * 100).toFixed(0)}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
              <Link to={`/poll/${poll.id}`} className="text-blue-500"><span className="cursor-pointer">Comment {poll.comments}</span></Link>
                <span className="cursor-pointer">Share {poll.shares}</span>
              </div>
              <Link to={`/poll/${poll.id}`} className="text-blue-500">View Details</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Create Poll Button */}
      <div className="absolute top-5 right-5">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
        >
          Create Poll
        </button>

        {
           showModal &&  <PollModal setShowModal={setShowModal}/> 
        }
      </div>
    </div>
  );
};

export default PollListPage;
