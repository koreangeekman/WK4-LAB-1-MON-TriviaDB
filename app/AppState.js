import { Category } from "./models/Category.js";
import { Question } from "./models/Question.js";
import { Settings } from "./models/Settings.js";
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  // SECTION GLOBAL VARIABLES

  categories = [new Category({ id: 1, name: 'test' })];

  questions = [new Question({
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the spy ring that helped the United States win the Revolutionary War?",
    correct_answer: "Culper Ring",
    incorrect_answers: [
      "New York Spy Ring",
      "Washington&#039;s Spies",
      "Unnamed"
    ]
  })
  ];

  settings = {}

  // !SECTION GLOBAL VARIABLES

  // NOTE Used to load initial data
  init() {
    this.settings = loadState('triviaSettings', [Settings])
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
