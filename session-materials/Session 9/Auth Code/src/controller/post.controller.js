const Posts = require("../modules/posts.modules");
const Users = require("../modules/users.modules");
const add_post = async (req, res) => {
  try {
    const { content } = req.body;
    const user_id = req.userId;

    const user = await Users.findById(user_id);
    if (!user) {
      return res.status(404).send({
        status: 404,
        msg: "User not found!",
      });
    }
    const newPost = new Posts({
      content,
      user: user._id,
    });
    user.posts.push(newPost._id);

    await newPost.save();
    await user.save();

    res.status(201).send({
      status: 201,
      data: newPost,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      msg: "Server Error!",
    });
  }
};
const change_content = async (req, res) => {
  try {
    const post_id = req.params.id;
    const { content } = req.body;
    const user_id = req.userId;
    const user = await Users.findById(user_id);
    const post = await Posts.findById(post_id);
    console.log(post_id);
    
    if (!user) {
      return res.status(404).send({
        status: 404,
        msg: "User not found!",
      });
    }
    if (!post) {
      return res.status(404).send({
        status: 404,
        msg: "Post not found!",
      });
    }
    if (post.user != user_id) {
      return res.status(401).send({
        status: 401,
        msg: "UnAuthorized Access!",
      });
    }
    post.content = content;
    await post.save();
    res.status(201).send({
      status: 201,
      data: post,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      msg: "Server Error!",
    });
  }
};
const remove_post = async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.userId;
    const post = await Posts.findById(id);
    if (!post) {
      return res.status(404).send({
        status: 404,
        msg: "Post Not Found!",
      });
    }
    if (post.user != user_id) {
      return res.status(401).send({
        status: 401,
        msg: "UnAuthorized Access!",
      });
    }
    await post.deleteOne();
    res.status(200).send({
      status: 200,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      msg: "Server Error!",
    });
  }
};

module.exports = { add_post, remove_post, change_content };
