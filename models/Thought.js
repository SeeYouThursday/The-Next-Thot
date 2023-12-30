const { Schema, model } = require('mongoose');
const reactionSchema = require('./schema/Reaction');
const { dateGetter, formatDate } = require('../utils/formatDate');

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
      get: function () {
        return formatDate(this.default);
      },
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
    toJSON: { getters: true },
  }
);
//TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//TODO Initialize Thought Model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
