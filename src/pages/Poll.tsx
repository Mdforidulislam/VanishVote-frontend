import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegThumbsUp, FaRegComment } from "react-icons/fa";

const PollDetailPage = () => {
  const { id } = useParams(); // Get poll ID from URL
  const [comments, setComments] = useState([
    { user: "Anonymous", comment: "I love JavaScript!", time: "2m" },
    { user: "Anonymous", comment: "Python is awesome!", time: "5m" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([{ user: "Anonymous", comment: newComment, time: "Just now" }, ...comments]);
      setNewComment("");
    }
  };

  const poll = {
    id,
    question: "What's your favorite programming language?",
    options: ["JavaScript", "Python", "Go", "Ruby"],
    likes: 32,
    comments: comments.length,
    shares: 7,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Poll Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all max-w-4xl w-full">
        <h3 className="text-xl font-semibold">{poll.question}</h3>
        <div className="space-y-2 mt-4">
          {poll.options.map((option, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{option}</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(Math.random() * 100).toFixed(0)}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500 text-left">
          <span className="font-semibold">Likes:</span> {poll.likes} | 
          <span className="font-semibold"> Comments:</span> {poll.comments} | 
          <span className="font-semibold"> Shares:</span> {poll.shares}
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Comments</h4>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="flex flex-col bg-gray-100 p-4 rounded-lg text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div> 
                  <div>
                    <p className="font-semibold text-gray-800">Anonymous</p>
                    <p className="text-xs text-gray-500">{comment.time} ago</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{comment.comment}</p>
                <div className="flex space-x-4 text-xs text-gray-500 mt-2">
                  <button className="hover:underline flex items-center space-x-1">
                    <FaRegThumbsUp /> <span>Like</span>
                  </button>
                  <button className="hover:underline flex items-center space-x-1">
                    <FaRegComment /> <span>Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCommentSubmit()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollDetailPage;