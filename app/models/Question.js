
export class Question {
  constructor(data) {
    this.category = data.category
    this.difficulty = data.difficulty
    this.qType = data.type
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get qaTemplate() {
    return `
    <div class="container-fluid">
      <div class="row p-md-5 justify-content-center">
        <div class="col-12 col-md-10">
          <p class="fs-1 fw-bold mb-0 title">QUESTION:</p>
          <p class="fs-2 ms-0 mx-md-3 mb-0 px-2 px-md-3 shadow question">${this.question}</p>
        </div>
      </div>
      <div class="row justify-content-center p-md-5 w-100">
        <div class="col-12 col-md-8 fs-3">
          <span class="row justify-content-evenly">
            <span class="col-12 col-md-5 m-3 d-flex shadow answer" type="button"
              onclick="">
              <i class="fs-1 opt mdi mdi-alpha-a-circle"></i>
              <p class="ps-4 mb-0">${this.correctAnswer}</p>
            </span>
            <span class="col-12 col-md-5 m-3 d-flex shadow answer" type="button"
              onclick="">
              <i class="fs-1 opt mdi mdi-alpha-b-circle"></i>
              <p class="ps-4 mb-0">${this.incorrectAnswers[0]}</p>
            </span>
            <span class="col-12 col-md-5 m-3 d-flex shadow answer" type="button"
              onclick="">
              <i class="fs-1 opt mdi mdi-alpha-c-circle"></i>
              <p class="ps-4 mb-0">${this.incorrectAnswers[1]}</p>
            </span>
            <span class="col-12 col-md-5 m-3 d-flex shadow answer" type="button"
              onclick="">
              <i class="fs-1 opt mdi mdi-alpha-d-circle"></i>
              <p class="ps-4 mb-0">${this.incorrectAnswers[2]}</p>
            </span>
          </span>
        </div>
      </div>
    </div>
    `
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