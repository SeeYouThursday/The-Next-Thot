const { Schema } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //! Testing Needed!!! getter method to format the timestamp on query
    get: formatDate(this.default),
  },
});

module.exports = reactionSchema;
