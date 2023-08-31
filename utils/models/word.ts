import { Schema, model } from "mongoose";

const WordSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  operation: {
    type: String,
    required: true,
    default: "add",
    trim: true,
    validate(value: string) {
      if (value !== "add" && value !== "remove") {
        throw new Error("Invalid operation type: " + value);
      }
    },
  },
});

export const Word = model("Word", WordSchema);
