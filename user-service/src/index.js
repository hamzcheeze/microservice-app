const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let users = [{ id: 1, name: "John Doe" }];

// Get Users
app.get("/users", (req, res) => {
    res.json(users);
});

// Add User
app.post("/users", (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Start Server
app.listen(3000, () => console.log("User Service running on port 3000"));