const { Schema, model } = require("mongoose");

const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: new Date(),
        get: (createdAt) => dateFormat(createdAt)
    },
    username: {
        type: String,
        required: true,
    },
    reactions:[reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

const dateFormat = function(date){
    return date.toDateString();
}

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
