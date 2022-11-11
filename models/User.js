const { mongoose, Schema } = require("../dbInitialSetup");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  address: String,
  password: String,
  phoneNumber: String,
  admin: Boolean,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
