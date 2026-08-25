const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema(
  {
    trainee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assessment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },

    answers: [
      {
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },

        answer: {
          type: String,
          required: true,
        },

        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],

    score: {
      type: Number,
      required: true,
      min: 0,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Attempt", attemptSchema);
