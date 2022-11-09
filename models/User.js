const { mongoose, Schema } = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

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

// userSchema.pre("save", function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   this.password = bcrypt.hashSync(this.password, 10);
// });

// userSchema.pre("insertMany", function (next, users) {
//   for (let user of users) {
//     user.password = bcrypt.hashSync(user.password, 10);
//   }
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
