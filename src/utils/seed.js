const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomReaction,
  getRandomThought,
  getRandomUsername,
} = require("./data");
connection.on("error", (e) => e);

connection.once("open", async () => {
    const start = Date.now();

  let userCheck = await connection.db
    .listCollections({ name: "user" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("user");
  }

  let thoughtCheck = await connection.db
    .listCollections({ name: "thought" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thought");
  }

  const users = []

  for(let i = 0; i < 20; i++){
    const username = getRandomUsername();
    users.push({
        username: username,
        email: `${username}@example.com`,
    });
  }

  const thoughts = []

  for(let i = 0; i < 20; i++){
    let thought = {
        thoughtText: getRandomThought(),
        username: users[Math.floor(Math.random() * users.length)].username,
        reactions: []
    }
    for(let j = 0; j < Math.floor(Math.random() * 3); j++){
        thought.reactions.push({
            reactionBody: getRandomReaction(),
            username: users[Math.floor(Math.random() * users.length)].username
        });
    }
    thoughts.push(thought);
  }
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  const end = Date.now();

  console.info(`Seeding finished in ${end - start}ms`);
  process.exit(0);
});
