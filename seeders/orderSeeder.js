const { faker } = require("@faker-js/faker");
const Order = require("../models/Order");
const User = require("../models/User");
const { mongoose } = require("../dbInitialSetup");

module.exports = async () => {
  await mongoose.connection.dropCollection("orders");
  const user = await User.find();
  const randomUser = user[faker.datatype.number({ min: 0, max: user.length - 1 })];
  const orders = ["1", "2", "3", "4"];
  for (let i = 0; i < orders.length; i++) {
    const order = new Order({
      user: randomUser._id,
      products: [
        { name: "mesa", price: 50, qty: 3 },
        { name: "sofa", price: 50, qty: 3 },
      ],
      status: "Not paid",
      shippingAddress: { address: "calle 2", apt: "15" },
      total: 3000,
    });

    await order.save();
  }

  console.log("[Database] Se corrió el seeder de Orders.");
};
