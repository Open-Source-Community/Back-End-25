const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Posts",
    },
  ],
});
userSchema.pre("save",async function(next){
  this.password = await bcrypt.hash(this.password,10)
  next()
})
module.exports = mongoose.model("Users", userSchema);