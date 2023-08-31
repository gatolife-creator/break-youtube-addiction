import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI as string;

export function addWord(word: string) {
  connect(MONGODB_URI)
    .then(() => {
      console.log("Connect");
    })
    .catch((err) => console.log(err));
}
