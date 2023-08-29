import React, { useEffect, useState } from "react";
import { VideoData } from "@/utils/api/search";

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
    id: "gyMwXuJrbJQ",
    title:
      "Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course",
  },
  {
    id: "pKd0Rpw7O48",
    title: "How to build a REST API with Node js &amp; Express",
  },
  {
    id: "7CqJlxBYj-M",
    title:
      "Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)",
  },
  { id: "fBNz5xF-Kx4", title: "Node.js Crash Course" },
  { id: "BLl32FvcdVM", title: "Node Js Tutorial in Hindi 🔥🔥" },
  { id: "lkIFF4maKMU", title: "100+ JavaScript Concepts you Need to Know" },
  {
    id: "ENrzD9HAZK4",
    title: "Node.js Ultimate Beginner’s Guide in 7 Easy Steps",
  },
  {
    id: "pU9Q6oiQNd0",
    title: "What is Node.js Exactly? - a beginners introduction to Nodejs",
  },
  {
    id: "NuyzuNBFWxQ",
    title: "7 Cryptography Concepts EVERY Developer Should Know",
  },
  {
    id: "-MTSQjw5DrM",
    title:
      "RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express",
  },
  { id: "RLtyhwFtXQA", title: "Learn Node.js - Full Tutorial for Beginners" },
  { id: "qwfE7fSVaZM", title: "Node.js / Express Course - Build 4 Projects" },
  {
    id: "w-7RQ46RgxU",
    title: "Node JS Tutorial for Beginners #1 - Introduction",
  },
  { id: "U8XF6AFGqlc", title: "Node.js Tutorial For Absolute Beginners" },
  {
    id: "nu_pCVPKzTk",
    title:
      "Full Stack Web Development for Beginners (Full Course on HTML, CSS, JavaScript, Node.js, MongoDB)",
  },
  {
    id: "qJ5R9WTW0_E",
    title:
      "Nodejs y Mysql, Aplicación Completa (Login, Registro, CRUD, ES6+ y Más )",
  },
  {
    id: "vjf774RKrLc",
    title:
      "Build A Restful Api With Node.js Express &amp; MongoDB | Rest Api Tutorial",
  },
  { id: "-RCnNyD0L-s", title: "Node.js Passport Login System Tutorial" },
  { id: "BhvLIzVL8_o", title: "Nodejs Curso Desde Cero, para principiantes" },
  { id: "eIQh02xuVw4", title: "GraphQL Explained in 100 Seconds" },
  {
    id: "ivDjWYcKDZI",
    title: "Fullstack приложение за 3 часа. React и Node. MERN",
  },
  { id: "mbsmsi7l3r4", title: "JWT Authentication Tutorial - Node.js" },
  {
    id: "3QNBVG2yqKA",
    title: "I Created a Realtime Chat Application Using NodeJs and SocketIO",
  },
  {
    id: "H2GCkRF9eko",
    title:
      "React &amp; Node.js ИНТЕРНЕТ МАГАЗИН С НУЛЯ. PERN stack PostgreSQL + express + React js + node.js",
  },
  {
    id: "6FOq4cUdH8k",
    title: "Node.js With Passport Authentication | Full Project",
  },
  {
    id: "y66RgYMAgSo",
    title:
      "React Node.js E-Commerce App Full Tutorial (REDUX -  Stripe - JWT ) - MERN Stack Shopping App",
  },
  {
    id: "GHTA143_b-s",
    title: "NestJs Course for Beginners - Create a REST API",
  },
  { id: "uVwtVBpw7RQ", title: "What is Node js?" },
  {
    id: "IIpiLZGTWuo",
    title:
      "🔴 #1: Introduction to Node JS in Hindi | Node.JS Tutorial for Beginners in Hindi",
  },
  {
    id: "zb3Qk8SG5Ms",
    title: "Node.js Crash Course Tutorial #1 - Introduction &amp; Setup",
  },
  {
    id: "uRQH2CFvedY",
    title: "ChatGPT Course – Use The OpenAI API to Code 5 Projects",
  },
  {
    id: "k3Vfj-e1Ma4",
    title:
      "React Node.js Booking App Full Tutorial | MERN Stack Reservation App (JWT, Cookies, Context API)",
  },
  {
    id: "fgTGADljAeg",
    title: "Build A REST API With Node.js, Express, &amp; MongoDB - Quick",
  },
  {
    id: "f2EqECiTBL8",
    title:
      "Node.js Full Course for Beginners | Complete All-in-One Tutorial | 7 Hours",
  },
  { id: "DHjqpvDnNGE", title: "JavaScript in 100 Seconds" },
  { id: "yEHCfRWz-EI", title: "What is Node js? | Simplified Explanation" },
  {
    id: "YFmgNiimfyk",
    title:
      "Backend Tutorial: Node.Js Introduction and Installation | Web Development Tutorials #63",
  },
  {
    id: "VrQgmNY96wo",
    title:
      "Node js complete tutorial in Hindi -  Full Node course in one video",
  },
  {
    id: "rMiRZ1iRC0A",
    title:
      "Node.js E-Commerce App REST API with MongoDB | Shopping API with Stripe &amp; JWT",
  },
  {
    id: "SBvmnHTQIPY",
    title: "Node.js App From Scratch | Express, MongoDB &amp; Google OAuth",
  },
  {
    id: "W1Kttu53qTg",
    title: "Complete CRUD Application with Node, Express &amp; MongoDB",
  },
  { id: "SccSCuHhOw0", title: "Learn Express JS In 35 Minutes" },
  { id: "7nafaH9SddU", title: "Node.js API Authentication With JWT" },
  {
    id: "JnvKXcSI7yk",
    title:
      "Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka",
  },
  { id: "3aGSqasVPsI", title: "Node JS - Быстрый Курс за 1 час" },
  { id: "EN6Dx22cPRI", title: "Using MySQL With Node.js" },
  { id: "RF5_MPSNAtU", title: "15.1: What is Node.js? - Twitter Bot Tutorial" },
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
            {/*eslint-disable-next-line @next/next/no-img-element*/}
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
