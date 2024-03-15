require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
//configuration
const port = 4000 || process.env.PORT;
const userRouter = require("./api/users/user.router");
const questionRouter = require("./api/questions/question.router");
const answerRouter = require("./api/answers/answer.router");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
//////////////////////////////////////////////////////
app.use("/api/questions", questionRouter);
app.use("/api/answers", answerRouter);
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
