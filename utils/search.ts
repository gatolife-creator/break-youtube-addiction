import { google } from "googleapis";
import * as dotenv from "dotenv";

dotenv.config();
const youtube = google.youtube("v3");

type Option = {
  query: string;
};

export type VideoData = {
  id: string;
  title: string;
};

export async function search(option: Option) {
  const { query } = option;

  const response = await youtube.search.list({
    key: process.env.KEY,
    part: ["id", "snippet"],
    order: "viewCount",
    type: ["video"],
    q: query,
    maxResults: 50,
  });

  if (response.data.items?.length === 0) {
    return;
  }

  const data = response.data.items?.map((item) => ({
    id: item.id?.videoId,
    title: item.snippet?.title,
  })) as VideoData[];

  return data;
}
