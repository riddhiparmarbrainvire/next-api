"use client";

import React, { useState } from "react";

export default function CommentsPage() {
  const [commentsData, setCommentsData] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setCommentsData(data);
  };

  const handleSubmitCommit = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  const handleDeleteComment = async (commentId: number) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data, "data in delete function");
    fetchComments();
  };

  return (
    <div>
      <h2>Comments page</h2>

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleSubmitCommit}>submit comment</button>
      <button onClick={fetchComments}>load comments</button>
      {commentsData.map((com: { [key: string]: any }) => {
        return (
          <div key={com.id}>
            <h1>
              {com.id} | {com.text}
              <button onClick={() => handleDeleteComment(com.id)}>
                Delete
              </button>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
