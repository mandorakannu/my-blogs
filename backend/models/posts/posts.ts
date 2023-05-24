import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  subTitle: {
    type: String,
    required: true,
    unique: true
  },
  urlOfImage: {
    type: String,
    required: true,
    unique: true
  },
  imageAltText: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  qoute: {
    type: String,
    required: true,
    unique: true
  },
  qouteDescription: {
    type: String,
    required: true,
    unique: true
  },
  heading: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
