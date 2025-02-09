"use client";

import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<
    { name: string; comment: string }[]
  >([]);
  const [name, setName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (name.trim() && newComment.trim()) {
      setComments([...comments, { name, comment: newComment }]);
      setName("");
      setNewComment("");
    }
  };

  return (
    <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800"> Add a Comment</h2>
      <div className="mb-6 space-y-4">
        <input
          type="text"
          required
          className="w-full px-4 py-2 rounded-lg  focus:ring-black"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full px-4 py-2 rounded-lg  focus:ring-black"
          placeholder="Write your comment here"
          required
          rows={4}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-900"
        >
          Add
        </button>
      </div>

      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg bg-gray-100 text-gray-800"
          >
            <p className="text-sm font-bold text-gray-900">{comment.name}</p>
            <p className="text-gray-700">{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
