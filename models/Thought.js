const { Schema, model } = require('mongoose');
const reactionSchema = require('./schema/Reaction');
const { formatDate } = require('../utils/formatDate');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
    // username that created this thought
    username: {
      type: String,
      required: true,
    },
    //these are like replies
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true, getters: true },
    id: false,
  }
);

//virtual that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//Initialize Thought Model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
