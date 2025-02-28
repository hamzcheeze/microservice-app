const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

let users = [{ id: 1, name: "John Doe" }];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

test("GET /users - should return users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
});

test("POST /users - should create new user", async () => {
    const response = await request(app).post("/users").send({ name: "Alice" });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Alice");
});
