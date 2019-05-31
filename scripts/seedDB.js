const mongoose = require("mongoose");
const db = require("../models/Users");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mern-auth"
);

const UsersSeed = [
    {
        firstName: "John",
        lastName: "Smith",
        email: "jsmith@gmail.com",
        password: "password",
    },
    {
        firstName: "Jane",
        lastName: "Gomez",
        email: "jgomez@gmail.com",
        password: "password",
    },
    {
        firstName: "Bill",
        lastName: "Jones",
        email: "bjones@gmail.com",
        password: "password",
    }
]

db.remove({})
    .then(() => db.collection.insertMany(UsersSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });