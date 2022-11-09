const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const { mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  await mongoose.connection.dropDatabase();
  console.log("entre user seeder");
  const users = [];

  const admin = new User({
    firstname: "admin",
    lastname: "admin",
    email: "admin@admin.com",
    address: "street 1234",
    password: "1",
    phoneNumber: "123456789",
    admin: true,
  });
  console.log("estoy en el medio");

  for (let i = 0; i < 10; i++) {
    const user = new User({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      password: "1",
      phoneNumber: "123456789",
      admin: false,
    });
    users.push(user);
  }
  console.log("sali del for");
  admin.save();
  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
