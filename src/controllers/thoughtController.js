const { User, Thought } = require("../models/index");

module.exports = {
  // Get all thoughts, GET
  async getThoughts(req, res) {
    try {
      const result = await Thought.find();
      console.log("GET")
      console.log(result);
      res.status(200).json(result);
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Get a single thought, GET
  async getOneThought(req, res) {
    try {
      const result = await Thought.findOne({ _id: req.params.thoughtId });
      res.status(200).json(result);
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  // Create a new thought, POST
  async newThought(req, res) {
    try {
      const thought = new Thought({
        thoughtText: req.body.thoughtText,
        username: req.body.username
      });
      await thought.save();
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought._id }}
      );
      if(!user){
        return res.status(400).json({ message: "Thought created but not added to user" });
      }
      res.status(200).json(thought);
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
