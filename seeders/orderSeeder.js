const { faker } = require("@faker-js/faker");
const Order = require("../models/Order");
const { mongoose } = require("mongoose");
const { getOverlappingDaysInIntervals } = require("date-fns/fp");

module.exports = async () => {
  const orders = ["1", "2", "3", "4"];
  for (let i = 0; i < orders.length; i++) {
    const order = new Order({
      name: orders[i],
    });

    await order.save();
  }

  console.log("[Database] Se corrió el seeder de Orders.");
};
