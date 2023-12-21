const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    //TODO Set default value to current timestamp
    default: '', //timestamp
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
};

module.exports = thoughtSchema;
