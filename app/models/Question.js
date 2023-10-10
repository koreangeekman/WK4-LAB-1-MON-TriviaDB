
export class Question {
  constructor(data) {
    this.category = data.category
    this.difficulty = data.difficulty
    this.qType = data.type
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

}

// https://opentdb.com/api.php?amount=10
// const dataFormat = {
//   "category": "History",
//   "type": "multiple",
//   "difficulty": "hard",
//   "question": "What was the name of the spy ring that helped the United States win the Revolutionary War?",
//   "correct_answer": "Culper Ring",
//   "incorrect_answers": [
//     "New York Spy Ring",
//     "Washington&#039;s Spies",
//     "Unnamed"
//   ]
// }