const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

userSchema.path('email').validate(function(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(email)
}, 'Name `{VALUE}` is not valid');

userSchema.virtual("friendCount").get(function(){
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
