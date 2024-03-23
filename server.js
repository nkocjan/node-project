const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();

app.use(
  session({
    secret: process.env.SECRETSESSION || "default-key", //
    resave: false, // magazynowanie sesji nawet jak nie nastąpiły w niej zmiany
    saveUninitialized: false, // Ustawienia sesji
  })
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const quizRouter = require("./quiz/server");
const parkingRouter = require("./parking/server");
app.use("/quiz", quizRouter);
app.use("/", quizRouter);
app.use("/parking", parkingRouter);


app.listen(process.env.PORT);