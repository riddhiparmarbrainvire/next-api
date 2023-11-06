import { comments } from "@/data/comments";

// get api
export default function handler(req: any, res: any) {
  // return new Promise((resolve, reject) => {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (res.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
  //   });
}
