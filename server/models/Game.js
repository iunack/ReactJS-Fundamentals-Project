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
    required: true
  },

  img: {
    data: Buffer,
    contentType: String
  },

  rating: {
    type: Number
  },

  pegirating: {
    type: Number,
    required: true
  },

  sysrequirements: [
    {
      os: { type: String },
      processor: { type: Number },
      memory: { type: Number },
      graphics: { type: String },
      storage: { type: Number }
    }
  ],

  comments: [
    {
      type: String,
      user: {
        type: ObjectId,
        ref: "User"
      }
    }
  ],

  uploader: {
    type: ObjectId,
    ref: "User"
  },

  downloader: [
    {
      type: ObjectId,
      ref: "User"
    }
  ]
});

module.exports = new Model("Game", gameSchema);
