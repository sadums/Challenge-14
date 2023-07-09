const { User } = require('../models/index');

module.exports = {
  // Get all users, GET
  async getUsers(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Get a single user, GET
  async getOneUser(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  //   Create a new user, POST
  async newUser(req, res) {
    try {
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
