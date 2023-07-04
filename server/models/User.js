//he "models" folder is typically used on the server side to define the data models or schemas for interacting with the MongoDB database.

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName:
    {
      type: String,
      require: true,
      min: 2,
      max: 50,
    },
    lastName:
    {
      type: String,
      require: true,
      min: 2,
      max: 50,

    },
    email:
    {
      type: String,
      require: true,
      max: 50,
      unique: true

    },
    password:
    {
      type: String,
      require: true,
      max: 50,
      unique: true

    },
    picturePath:
    {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,


  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;