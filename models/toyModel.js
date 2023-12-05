const mongoose = require("mongoose");

const toySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The toy must have name"],
  },
  info: {
    type: String,
    required: [true, "The toy must have info"],
  },
  category: {
    type: String,
    required: [true, "The toy must have category"],
  },

  img_url: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: [true, "The toy must have price"],
  },
  date_created: {
    type: Date,
    default: new Date(),
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

toySchema.pre(/^find/, function (next) {
  this.populate("user_id");
  next();
});
const Toy = mongoose.model("Toy", toySchema);

module.exports = Toy;
