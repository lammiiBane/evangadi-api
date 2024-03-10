const { addQuestion, importQuestions } = require("./question.service");
const pool = require("../../config/database");
module.exports = {
  createQuestion: (req, res) => {
    const { title, description } = req.body;
    if (!title)
    return res.status(400)
        .json({ msg: "Please provide a title for your question." });
    addQuestion(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ msg: "Error adding the question: database connection err" });
      }
      return res.status(200).json({
        msg: "New question is created successfully",
        data: results,
      });
    });
  },
  getQuestions: (req, res) => {
    importQuestions((err, results) => {
      if (err) {
        console.log("get Questions: ", err);
        return res.status(500).json({ msg: "Database connection error." });
      }
      return res.status(200).json({ data: results });
    });
  },
};
