import React from "react";
import { comments } from "@/data/comments";

export default function handler(req: any, res: any) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find((com) => com.id === parseInt(commentId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (com) => com.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);

    res.status(200).json(deletedComment);
  }
}
