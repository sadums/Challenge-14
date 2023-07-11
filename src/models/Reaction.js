const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId:{
        type: Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxLength: 280,
    },
    username:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
        get: (createdAt) => dateFormat(createdAt)
    },
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


module.exports = reactionSchema;