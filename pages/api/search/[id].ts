import type { NextApiRequest, NextApiResponse } from "next";
import { search, VideoData } from "../../../utils/search";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VideoData[]>
) {
  const id = req.query.id as string;
  const data = await search({ query: id });

  if (data !== undefined) {
    res.status(200).json(data);
  }
}
