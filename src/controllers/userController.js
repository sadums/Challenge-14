const { User } = require("../models");

module.exports = {
  // Get all users, GET
  async getUsers(req, res) {
    try {
      const result = await User.find();
      res.status(200).json(result);
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Get a single user, GET
  async getOneUser(req, res) {
    try {
      const result = await User.find({ _id: req.params.userId });
      res.status(200).json(result)
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Create a new user, POST
  async newUser(req, res) {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email
      });
      await user.save();
      if(user){
        res.status(200).json(user);
      }else{
        res.status(400).json({ message: "Bad request"});
      }
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Update a user, PUT
  async updateUser(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Delete a user, DELETE
  async deleteUser(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Add a friend to a user's friend list, POST
  async newFriend(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Delete a friend from a user's friend list, DELETE
  async deleteFriend(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
};
