const { mongoose, Schema } = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;
const userSchema = new Schema(
  {
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
  },
  // { timestamps: true },
);

/* userSchema.pre("save", async function save(next) {
  console.log("entre al pre");
  if (!this.isModified("password")) {
    console.log("adentro del if");
    return next();
  }
  try {
    console.log("adentro del try");
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    console.log("pre hash" + " " + this.password);
    this.password = await bcrypt.hash(this.password, salt);
    console.log("post hash " + this.password);
    return next();
  } catch (err) {
    return next(err);
  }
}); */

userSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
