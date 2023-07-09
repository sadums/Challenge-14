const { Thought } = require("../models/index");

module.exports = {
  // Get all thoughts, GET
  async getThoughts(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Get a single thought, GET
  async getOneThought(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Create a new thought, POST
  async newThought(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Update a thought, PUT
  async updateThought(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Delete a thought, DELETE
  async deleteThought(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Create a new reaction, POST
  async newReaction(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Delete a reaction, DELETE
  async deleteReaction(req, res) {
    try {
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
};
