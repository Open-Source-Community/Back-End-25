const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
});
module.exports = mongoose.model("Posts", postSchema);
