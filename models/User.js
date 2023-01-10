const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
  },
  batch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Batch",
  },
  course: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  username: {
    type: String,
    required: [true, "username is required"],
  },
  password: {
    type: String,
  },
  profile: {
    type: String,
  },
});
module.exports = mongoose.model("User", Userschema);
