const Users = require("../modules/users.modules");

const get_posts = async (req, res) => {
  const user_id = req.userId;
  const user = await Users.findById(user_id)
    .populate("posts", "content")
    .select("posts");
  if (!user) {
    return res.status(400).send({
      status: 400,
      msg: "invalid email or password",
    });
  }
  res.status(200).send({
    status: 200,
    data: user.posts,
  });
};

module.exports = { get_posts };
