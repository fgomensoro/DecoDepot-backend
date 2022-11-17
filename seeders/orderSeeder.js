const { faker } = require("@faker-js/faker");
const Order = require("../models/Order");
const User = require("../models/User");
const { mongoose } = require("mongoose");

module.exports = async () => {
  const user = await User.find();
  const randomUser = user[faker.datatype.number({ min: 0, max: user.length - 1 })];
  const orders = ["1", "2", "3", "4"];
  for (let i = 0; i < orders.length; i++) {
    const order = new Order({
      user: randomUser._id,
      products: [
        { product: "mesa", qty: 3 },
        { product: "sofa", qty: 3 },
      ],
      status: "Not paid",
    });

    await order.save();
  }

  console.log("[Database] Se corrió el seeder de Orders.");
};
