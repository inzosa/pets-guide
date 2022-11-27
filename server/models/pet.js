const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    origin: { type: String },
    desc: { type: String, required: true },
    src: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

petSchema.statics.create = function (payload) {
  const pet = new this(payload);
  return pet.save();
};

petSchema.statics.findAll = function () {
  return this.find({});
};

module.exports = mongoose.model('Pet', petSchema);
