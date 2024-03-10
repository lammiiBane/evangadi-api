require("dotenv").config();
const express = require("express");
<<<<<<< HEAD
const cors = require("cors")
const app = express();
=======
const cors = require("cors");
>>>>>>> 629da9f91978e2cffeaf5ab660a4fa7dace1e6d3
const port = 4000 || process.env.PORT;
const userRouter = require("./api/users/user.router");
const questionRouter = require("./api/questions/question.router");
const answerRouter = require("./api/answers/answer.router");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
//////////////////////////////////////////////////////
app.use("/api/questions", questionRouter);
app.use("/api/answers", answerRouter);
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
