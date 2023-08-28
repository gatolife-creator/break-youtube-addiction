import React, { useEffect, useState } from "react";
import { VideoData } from "@/utils/search";

const dummyVideoData = [
  {
    id: "TlB_eWDSMt4",
    title: "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
  },
  {
    id: "8aGhZQkoFbQ",
    title:
      "What the heck is the event loop anyway? | Philip Roberts | JSConf EU",
  },
  { id: "Oe421EPjeBE", title: "Node.js and Express.js - Full Course" },
  {
    id: "pKd0Rpw7O48",
    title: "How to build a REST API with Node js &amp; Express",
  },
  { id: "fBNz5xF-Kx4", title: "Node.js Crash Course" },
];

export default function Home() {
  const [videosData, setVideosData] = useState<VideoData[]>();
  useEffect(() => {
    setVideosData(dummyVideoData);
    // fetch("/api/search/node.js", {
    //   method: "GET",
    //   cache: "no-cache",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data: VideoData[]) => {
    //     setVideosData(data);
    //   });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {videosData?.map((data, index) => (
          <div key={index}>
            <img
              src={`https://i.ytimg.com/vi/${data.id}/hqdefault.jpg`}
              alt="thumbnail"
              width={300}
              className="mx-auto"
            />
            <p className="text-center">{data.title.slice(0, 20) + "..."}</p>
          </div>
        ))}
      </div>
    </>
  );
}
