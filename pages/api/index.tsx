import React from "react";

export default function handler(req: any, res: any) {
  res.status(200).json({ name: "home api router" });
}
