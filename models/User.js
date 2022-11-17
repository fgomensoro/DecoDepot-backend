const { mongoose, Schema } = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  address: String,
  password: String,
  phoneNumber: String,
  isAdmin: Boolean,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  slug: String,
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.pre("insertMany", function (next, users) {
  for (let user of users) {
    user.password = bcrypt.hashSync(user.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
