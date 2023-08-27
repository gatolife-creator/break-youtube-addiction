import { useEffect, useState } from "react";
import { VideoData } from "@/utils/search";

export default function Home() {
  console.log("rendered");
  const [videosData, setVideosData] = useState<VideoData[]>();
  useEffect(() => {
    fetch("/api/search/node.js", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: VideoData[]) => {
        setVideosData(data);
      });
  }, []);

  return (
    <>
      {videosData?.map((data, index) => (
        <p key={index}>
          {data.id}, {data.title}
        </p>
      ))}
    </>
  );
}
