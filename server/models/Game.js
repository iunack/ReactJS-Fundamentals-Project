const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    default: 0
  },

  image: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: true
  },

  recommended: {
    type: Boolean,
    default: false
  },

  platform: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  uploader: {
    type: ObjectId,
    ref: "User"
  },

  downloaders: [
    {
      type: ObjectId,
      ref: "User"
    }
  ]
});

module.exports = new Model("Game", gameSchema);
