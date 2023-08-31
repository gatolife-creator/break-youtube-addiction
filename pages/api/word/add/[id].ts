import type { NextApiRequest, NextApiResponse } from "next";
import { addWord } from "@/utils/mongodb";
import { Word } from "@/utils/models/word";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id as string;
  const word = new Word({ name: id, operation: "add" });
  addWord(id);

  try {
    await word.save();
    res.status(200).send("successful");
  } catch (err) {
    res.status(500).send(err);
  }
}
