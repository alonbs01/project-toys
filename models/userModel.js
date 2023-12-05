const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "The user must have an email"],
    validate: [validator.isEmail, "The email is not a valid email"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "The user must have a name"],
    maxLength: [20, "The name must be shorter than 20 characters"],
  },
  password: {
    type: String,
    required: [true, "The user must have a password"],
    minLengtn: [8, "The password must be at least 8 characters"],
    select: false,
  },
  date_created: {
    type: Date,
    default: new Date(),
  },
  role: {
    type: String,
    enum: {
      values: ["USER", "ADMIN"],
    },
    default: "USER"
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.checkPassword = async function (pass, hashedPass) {
  return await bcrypt.compare(pass, hashedPass);
}
const User = mongoose.model("User", userSchema);

module.exports = User;
