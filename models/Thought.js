const { Schema, model } = require('mongoose');
const reactionSchema = require('./schema/Reaction');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //TODO Use a getter method to format the timestamp on query - happens in the routess
  },
  // username that created this thought
  username: {
    type: String,
    required: true,
  },
  //these are like replies
  reactions: [reactionSchema],
});
//TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

//TODO Initialize Thought Model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
