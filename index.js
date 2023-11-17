const express = require('express');
const app = express();

// for adding middlewares
const { logReqRes } = require('./middlewares');
// for connection with DB
const { connectMongoDB } = require('./connection');
// for Router
const userRouter = require("./routes/user");

// Connection
connectMongoDB("mongodb://localhost:27017/UsersData").then(() => console.log("MongoDB Connected")).catch((error) => console.log("MongoDB Not Connecting...", error));

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logReqRes('log.txt'));

// Routes
app.use("/api/users", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}...`));