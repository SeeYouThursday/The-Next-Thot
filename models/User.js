const { Schema, model } = require('mongoose');
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      //! NOTE: violating the constraint returns an E11000 error from MongoDB when saving, not a Mongoose validation error.
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        'Please enter a valid email',
      ],
    },
    //Future Dev: Add Password
    //TODO check below about
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    //TODO check below about friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// todo: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialize the User model
const User = model('user', userSchema);

module.exports = User;
