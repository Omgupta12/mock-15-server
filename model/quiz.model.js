const { Schema, model } = require("mongoose");

const QuizSchema = new Schema(
    {
        category: { type: String, required: true },
        type: {type: String,required: true},
        difficulty: { type: String,required: true,},
        question: {
            type: String,
            required: true,
        },
        correct_answer: {
            type: String,
            required: true,
        },
        incorrect_answers: [
            {
                type: String,
                required: true,
            },
        ],
    },
    { timestamps: true }
);
const QuizModel = model("quiz", QuizSchema);

module.exports = QuizModel;
